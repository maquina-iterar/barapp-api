const express = require("express");
const monk = require("monk");
const slug = require("slug");

const db = monk(process.env.MONGO_DB);

const router = express.Router();

const espacioAlAireLibreOptions = {
  Abierto: "abierto",
  Techado: "techado",
  No: false,
};

const redesSociales = {
  instagram: "instagram",
  website: "website",
};

const paises = {
  Argentina: "Argentina",
};

const baresSeed = [
  {
    slug: slug(`Club de la birra ${paises.Argentina}`),
    meGusta: 0,
    noMeGusta: 0,
    nombre: "Club de la birra",
    descripcion: "Tiene unas papas con salsas increíbles",
    fotoUrl: `${process.env.STATIC_FILES_URL}/344B61A5-43D2-4A2F-8248-3C164EF5F156%20-%20Camila%20Grizio.jpeg`,
    direccion: "Av. Pedro Goyena 60, C1424 CABA",
    pais: paises.Argentina,
    ubicacionUrl: "https://goo.gl/maps/fsdAcFhHQL4XQRGk7",
    galeria: [
      `${process.env.STATIC_FILES_URL}/344B61A5-43D2-4A2F-8248-3C164EF5F156%20-%20Camila%20Grizio.jpeg`,
    ],
    contactos: [
      {
        redSocial: redesSociales.instagram,
        link: "https://instagram.com/clubdelabirra",
      },
    ],
    caracteristicas: {
      opcionVegetariana: true, // false
      musiscaEnVivo: false,
      espacioAlAireLibre: espacioAlAireLibreOptions.Abierto,
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
  },
  {
    slug: slug(`However Bar ${paises.Argentina}`),
    meGusta: 0,
    noMeGusta: 0,
    nombre: "However Bar",
    descripcion:
      "Con cervezas artesanales y mucha buena onda, es una muy buena opción para juntarte con amigos a tomar algo. Además tiene muy buenos precios. ",
    fotoUrl: `${process.env.STATIC_FILES_URL}/Captura de Pantalla 2020-09-06 a la(s) 14.58.01 - Christian Escalante.png`,
    direccion: "Raúl Scalabrini Ortíz 601",
    pais: paises.Argentina,
    ubicacionUrl: "https://goo.gl/maps/1tcWUtctiSdpmfCR9",
    galeria: [
      `${process.env.STATIC_FILES_URL}/Captura de Pantalla 2020-09-06 a la(s) 14.58.01 - Christian Escalante.png`,
    ],
    contactos: [
      {
        redSocial: redesSociales.instagram,
        link: "https://instagram.com/however.bar",
      },
    ],
    caracteristicas: {
      opcionVegetariana: true, // false
      musiscaEnVivo: false,
      espacioAlAireLibre: espacioAlAireLibreOptions.Abierto,
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
  },
];

router.post("/", async (request, response) => {
  const bares = await db.get("bares");

  bares.createIndex({ slug: 1 }, { unique: true });

  for (const bar of baresSeed) {
    const existe = await bares.findOne({
      slug: bar.slug,
    });

    if (!existe) {
      await bares.insert(bar);
    }
  }

  const result = await bares.find({});

  db.close();

  response.json({
    message: "Bares creados/actualizados correctamente!!!",
    bares: result,
  });
});

module.exports = router;
