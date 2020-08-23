const express = require("express");
const db = require("monk")(process.env.MONGO_DB);

const router = express.Router();

const Joi = require("@hapi/joi");

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
  const { id: _id } = request.params;

  const bares = await db.get("bares");

  const result = await bares.findOne({ _id });

  db.close();

  response.json(result);
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
