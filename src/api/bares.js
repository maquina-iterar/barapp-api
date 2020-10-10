const express = require("express");
const db = require("monk")(process.env.MONGO_DB);

const router = express.Router();

const Joi = require("@hapi/joi");

const authorizer = require("./authorizer");

const schema = Joi.object({
  nombre: Joi.string().trim().min(3).max(50).required(),
  fotoUrl: Joi.string().uri().trim().required(),
  ubicacionUrl: Joi.string().trim().uri().required(),
  descripcion: Joi.string().trim(),
});

router.get("/", async (request, response) => {
  const bares = await db.get("bares");

  const result = await bares.find({});

  db.close();

  response.json(result);
});

router.get("/:id", async (request, response) => {
  const { id: _id, userId } = request.params;

  const bares = await db.get("bares");

  const result = await bares.findOne({ _id });

  let miValoracion = null;

  if (userId) {
    const valoraciones = await db.get("valoraciones");
    const valoracion = await valoraciones.findOne({ barId: _id, userId });
    miValoracion = valoracion ? valoracion.valor : null;
  }

  db.close();

  response.json({ ...result, miValoracion });
});

router.post("/:id/:valoracion", authorizer, async (request, response, next) => {
  try {
    const { id: _id, valoracion } = request.params;

    const valoracionesPermitidas = ["megusta", "nomegusta"];

    if (!valoracionesPermitidas.includes(valoracion.toLowerCase()))
      throw new Error("invalid-valoracion");

    const isLike = valoracion.toLowerCase() === "megusta";

    const bares = await db.get("bares");
    const valoraciones = await db.get("valoraciones");

    const incrementar = isLike ? { meGusta: 1 } : { noMeGusta: 1 };

    valoraciones.createIndex({ barId: 1, userId: 1 }, { unique: true });

    await valoraciones.insert({
      barId: _id,
      valor: valoracion.toLowerCase(),
      userId: request.user.sub,
      userInfo: request.user["https://info.barapp.com/"],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      deletedAt: null,
    });

    await bares.update({ _id }, { $inc: incrementar });

    db.close();

    response.send(200);
  } catch (error) {
    next(error);
  }
});

router.post("/:id/nomegusta", async (request, response) => {
  const { id: _id } = request.params;

  const bares = await db.get("bares");

  await bares.update({ _id }, { $inc: { meGusta: 1 } });

  db.close();

  response.send(200);
});

router.post("/agregar", async (request, response, next) => {
  try {
    const bar = await schema.validateAsync(request.body);

    const bares = await db.get("bares");

    const barInsertado = await bares.insert(bar);

    db.close();

    response.json(barInsertado);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
