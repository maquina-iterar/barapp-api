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
  Espana: "España",
};

const baresSeed = [
  {
    slug: slug(`Club de la birra ${paises.Argentina}`),
    meGusta: 0,
    noMeGusta: 0,
    nombre: "Club de la birra",
    descripcion: "Tiene unas papas con salsas increíbles",
    fotoUrl: `${process.env.STATIC_FILES_URL}/club-de-la-birra-argentina-0000.jpeg`,
    direccion: "Av. Pedro Goyena 60",
    pais: paises.Argentina,
    ubicacionUrl: "https://goo.gl/maps/fsdAcFhHQL4XQRGk7",
    galeria: [
      `${process.env.STATIC_FILES_URL}/club-de-la-birra-argentina-0000.jpeg`,
    ],
    contactos: [
      {
        redSocial: redesSociales.instagram,
        link: "https://instagram.com/clubdelabirra",
      },
    ],
    caracteristicas: {
      opcionVegetariana: true,
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
    fotoUrl: `${process.env.STATIC_FILES_URL}/however-bar-argentina-0000.png`,
    direccion: "Raúl Scalabrini Ortíz 601",
    pais: paises.Argentina,
    ubicacionUrl: "https://goo.gl/maps/1tcWUtctiSdpmfCR9",
    galeria: [`${process.env.STATIC_FILES_URL}/however-bar-argentina-0000.png`],
    contactos: [
      {
        redSocial: redesSociales.instagram,
        link: "https://instagram.com/however.bar",
      },
    ],
    caracteristicas: {
      opcionVegetariana: true,
      musiscaEnVivo: false,
      espacioAlAireLibre: espacioAlAireLibreOptions.Abierto,
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
  },
  {
    slug: slug(`Avant Garden ${paises.Argentina}`),
    meGusta: 0,
    noMeGusta: 0,
    nombre: "Avant Garden",
    descripcion:
      "El lugar es hermoso, la carta de cervezas y tragos es variada, y algunas noches podes encontrarte con djs pasando música house en un ambiente súper relajado. ",
    fotoUrl: `${process.env.STATIC_FILES_URL}/avant-garten-argentina-0000.jpg`,
    direccion: "Av. del Libertador 3883",
    pais: paises.Argentina,
    ubicacionUrl: "https://goo.gl/maps/Xnt97AkHjGGvp5tLA",
    galeria: [
      `${process.env.STATIC_FILES_URL}/avant-garten-argentina-0000.jpg`,
    ],
    contactos: [
      {
        redSocial: redesSociales.instagram,
        link: "https://instagram.com/avantgartenba",
      },
    ],
    caracteristicas: {
      opcionVegetariana: true,
      musiscaEnVivo: true,
      espacioAlAireLibre: espacioAlAireLibreOptions.Techado,
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
  },
  {
    slug: slug(`El Tigre del Norte ${paises.Espana}`),
    meGusta: 0,
    noMeGusta: 0,
    nombre: "El Tigre del Norte",
    descripcion:
      "Combo de Caña + Cena por muy pocos euros, abudante y buen ambiente.",
    fotoUrl: `${process.env.STATIC_FILES_URL}/el-tigre-del-norte-espana-0000.jpg`,
    direccion: "Calle de Hortaleza 23",
    pais: paises.Espana,
    ubicacionUrl: "https://goo.gl/maps/CnWhRN8Z17TBmX3Z9",
    galeria: [
      `${process.env.STATIC_FILES_URL}/el-tigre-del-norte-espana-0000.jpg`,
      `${process.env.STATIC_FILES_URL}/el-tigre-del-norte-espana-0001.jpg`,
    ],
    contactos: [
      {
        redSocial: redesSociales.website,
        link:
          "https://www.tripadvisor.com.ar/Restaurant_Review-g187514-d3752906-Reviews-El_Tigre_del_Norte-Madrid.html",
      },
    ],
    caracteristicas: {
      opcionVegetariana: false,
      musiscaEnVivo: false,
      espacioAlAireLibre: espacioAlAireLibreOptions.No,
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
