const express = require("express");
const monk = require("monk");
const slug = require("slug");
const imagesMigration = require("./migrations/images-0001.json");

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
  Chile: "Chile",
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
    ubicacion: {
      type: "Point",
      coordinates: [-34.625371, -58.427939],
      index: "2dsphere",
    },
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
      musicaEnVivo: false,
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
    ubicacion: {
      type: "Point",
      coordinates: [-34.597835, -58.435391],
      index: "2dsphere",
    },
    galeria: [`${process.env.STATIC_FILES_URL}/however-bar-argentina-0000.png`],
    contactos: [
      {
        redSocial: redesSociales.instagram,
        link: "https://instagram.com/however.bar",
      },
    ],
    caracteristicas: {
      opcionVegetariana: true,
      musicaEnVivo: false,
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
    ubicacion: {
      type: "Point",
      coordinates: [-34.570471, -58.421854],
      index: "2dsphere",
    },
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
      musicaEnVivo: true,
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
    ubicacion: {
      type: "Point",
      coordinates: [40.421742, -3.700109],
      index: "2dsphere",
    },
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
      musicaEnVivo: false,
      espacioAlAireLibre: espacioAlAireLibreOptions.No,
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
  },
  {
    slug: slug(`Cervecería Intrinsical ${paises.Chile}`),
    meGusta: 0,
    noMeGusta: 0,
    nombre: "Cervecería Intrinsical",
    descripcion:
      "Cervecería artesanal chilena: Cervecería de barrio directo a tu casa 🍺",
    fotoUrl: `${process.env.STATIC_FILES_URL}/cerveceria-artesanal-chilena-0000.jpg`,
    direccion: "Brasil 88, Santiago centro, Chile",
    pais: paises.Chile,
    ubicacionUrl: "https://goo.gl/maps/mYQ4zGfaJEdff2Up6",
    ubicacion: {
      type: "Point",
      coordinates: [-33.443952, -70.665121],
      index: "2dsphere",
    },
    galeria: [
      `${process.env.STATIC_FILES_URL}/cerveceria-artesanal-chilena-0000.jpg`,
    ],
    contactos: [
      {
        redSocial: redesSociales.instagram,
        link: "https://www.instagram.com/cerveceriaintrinsical/",
      },
    ],
    caracteristicas: {
      opcionVegetariana: true,
      musicaEnVivo: false,
      espacioAlAireLibre: espacioAlAireLibreOptions.Abierto,
      fumadores: true,
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
  },
  {
    slug: slug(`El Mesón del Buen Comer ${paises.Chile}`),
    meGusta: 0,
    noMeGusta: 0,
    nombre: "El Mesón del Buen Comer",
    descripcion:
      "Somos el Jardín Cervecero del centro de Santiago. Con 25 variedades de cerveza artesanal en Schop y una gran cantidad de cervezas nacionales e importadas.",
    fotoUrl: `${process.env.STATIC_FILES_URL}/el-meson-chile.jpg`,
    direccion: "Brasil 88, Santiago centro, Chile",
    pais: paises.Chile,
    ubicacionUrl: "https://goo.gl/maps/4dXKgTeVZBovPSFZ7",
    ubicacion: {
      type: "Point",
      coordinates: [-33.450566, -70.652608],
      index: "2dsphere",
    },
    galeria: [`${process.env.STATIC_FILES_URL}/el-meson-chile.jpg`],
    contactos: [
      {
        redSocial: redesSociales.instagram,
        link: "https://www.instagram.com/elmesondelbuen/",
      },
    ],
    caracteristicas: {
      opcionVegetariana: true,
      musicaEnVivo: false,
      espacioAlAireLibre: espacioAlAireLibreOptions.Abierto,
      fumadores: true,
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
  },
  {
    slug: "bar-pancho-argentina",
    meGusta: 0,
    noMeGusta: 0,
    nombre: "Bar Pancho",
    descripcion:
      "Siempre abieeto Buena atencion siempre!\nExcelente viaje\nExcelente atención. Abierto las 24 horas. Como pocos en esta Ciudad que cada vez está más apagada.\nBuena atención\nUn desastre los tragos un desartre la verdad in Recomendable ño unico bueno fue la amabilidad de los mozos/sas",
    fotoUrl:
      "https://lh3.googleusercontent.com/p/AF1QipNtDS3UZerN_2jVybW-TfpT1s8hhpPMj0IkhNM=s1600-w1024",
    direccion: "Av. Santa Fe 4396, C1425 BHS, Buenos Aires, Argentina",
    pais: "Argentina",
    ubicacionUrl: "https://maps.google.com/?cid=15426844586261968509",
    ubicacion: {
      type: "Point",
      coordinates: [-34.5799691, -58.42356559999999],
      index: "2dsphere",
    },
    galeria: [
      "https://lh3.googleusercontent.com/p/AF1QipNtDS3UZerN_2jVybW-TfpT1s8hhpPMj0IkhNM=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipP-y8o_CBGNcaqg4N7Lmeylu4rVUJYqIY31SZ52=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipO2I41K_EH4VfUrGaqhm_K-EFtCmr8G-ZfeCKka=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipNBqfjf1HLzJBaBiXsvgwF-0jbcsywGdNyef2ar=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipMpLkVWhdDagpyTBy3v9kihcF2QJIPHT9yycojm=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPfBwTyTfXBp773RImg4MS6Ql3hcZnob0dF35Hs=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipOf9wmUKKgd99Xr6IkcRpD0frEkf-K10fPZiEmD=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipOBOp8S6Wj33NaIUNcoXcEa-lvEld4l66gqpTP5=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPWTkj6KSbM_I1-NRlqMeYzCCVf3uAY8zejZ2aK=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPrasLX7c7BmId-zLj2ZR2M0UZL9eXSTCrlqwrp=s1600-w1024",
    ],
    contactos: [
      {
        redSocial: "website",
      },
      {
        redSocial: "whatsapp",
      },
    ],
    caracteristicas: {},
    createdAt: "2020-11-15T23:32:09.929Z",
    updatedAt: "2020-11-15T23:32:09.929Z",
    deletedAt: null,
  },
  {
    slug: "berkana-argentina",
    meGusta: 0,
    noMeGusta: 0,
    nombre: "Berkana",
    descripcion:
      "Fuimos con un grupo de amigos y la atención fue buena ! Éxitos !!!\n\nExcelente atención  y las pizzas geniales\nSin mucho más que agregar que las estrellas que le di.",
    fotoUrl:
      "https://lh3.googleusercontent.com/p/AF1QipPZoY7msQbM01LrSWi9asSOdSTKn0G-HtVxJ_j4=s1600-w1024",
    direccion: "Godoy Cruz 2481, C1425 FQE, Buenos Aires, Argentina",
    pais: "Argentina",
    ubicacionUrl: "https://maps.google.com/?cid=15120443212459035566",
    ubicacion: {
      type: "Point",
      coordinates: [-34.5809905, -58.42717609999999],
      index: "2dsphere",
    },
    galeria: [
      "https://lh3.googleusercontent.com/p/AF1QipPZoY7msQbM01LrSWi9asSOdSTKn0G-HtVxJ_j4=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipM6x5fJgGNswAcU-LxbVOBcmRpj7tp-P8vopKst=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipOpIKsFGAq0H-cQUa2KrA0ypcJb-psr5wTZ_n0Z=s1600-w1024",
    ],
    contactos: [
      {
        redSocial: "website",
      },
      {
        redSocial: "whatsapp",
        link: "011 4774-6967",
      },
    ],
    caracteristicas: {},
    createdAt: "2020-11-15T23:31:47.244Z",
    updatedAt: "2020-11-15T23:31:47.244Z",
    deletedAt: null,
  },
  {
    slug: "cante-pri-bar-de-chicos-argentina",
    meGusta: 0,
    noMeGusta: 0,
    nombre: "Canté Pri, Bar de Chicos",
    descripcion:
      "Choris de alta gama.\nUn lugar pensado para la familia, la.plaza de juego muy linda. Fui a cenar, todo muy rico. En lo que respecta a la atención 10 puntos!. La pase muy bien, volveré.\nLe califico con 5 estrellas por lo innovador del lugar, por la excelente atención y por la excelente variedad de juegos y del menú.\nUn excelente lugar para ir con niños de todas las edades. Especial opción para ir en familia a comer, divertirse y pasarla realmente bien.\nSi bien tienen mucho por mejorar, desde el mantenimiento del edificio, los juegos y el mobiliario en general.\nQuizá les falte más seguridad en los juegos o alguien que supervise porque el salón de comidas está separado del de juegos.\nLas porciones están bien. La comida es sabrosa.\nSi van muchas familias se complica el uso de los juegos y espacios del lugar.\nLos precios son razonables para lo que ofrecen, pero no es muy accesible.\nOfrecen los medios de pago habituales.\nSe paga por chico por el uso de los juegos e incluye una bebida.\nNos divertimos mucho y seguro volvemos.",
    fotoUrl:
      "https://lh3.googleusercontent.com/p/AF1QipMxvhZrIF8zWkTWFy3TEqAMni6hAST11Kv0RS4=s1600-w1024",
    direccion: "Charcas 5216, C1425 BOH, Buenos Aires, Argentina",
    pais: "Argentina",
    ubicacionUrl: "https://maps.google.com/?cid=9438749716294827350",
    ubicacion: {
      type: "Point",
      coordinates: [-34.5776868, -58.4312224],
      index: "2dsphere",
    },
    galeria: [
      "https://lh3.googleusercontent.com/p/AF1QipMxvhZrIF8zWkTWFy3TEqAMni6hAST11Kv0RS4=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipMSycY3qrw4qz8T1Pdd_k5dGktSj4WL_Zg5f-2-=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPY5q7-nLLCbJ1FDrYxBoEAabXBPQms97VXp7Tt=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipOIf2cYILMwp6ZVSdeSPfxtYJ-cOyiWfxF-6ySy=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipOWmruE_1ArceKUFs3esUuL8C1fRq40-K5S9J9o=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipOjnkRUF7Dq3XF0BKwuqa8dsqQRB26M7g4_Z-em=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipMYvzHsIbX8ulMkUn63zCs5SQ2xvfval1cVTZyC=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipOB4N9xwg5-8yM5OwhYTIcKcbW19xKMqH7s7ths=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipMt46uy5bNqTCWF9jJkvecwOy2apk4lheKZAok0=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipM_vsUg2CsGxdQ8_dGhohoJ1SRhrE9Ti9pbkYCW=s1600-w1024",
    ],
    contactos: [
      {
        redSocial: "website",
        link: "http://cantepri.com",
      },
      {
        redSocial: "whatsapp",
        link: "011 4777-7236",
      },
    ],
    caracteristicas: {},
    createdAt: "2020-11-15T23:31:35.577Z",
    updatedAt: "2020-11-15T23:31:35.577Z",
    deletedAt: null,
  },
  {
    slug: "cerveza-patagonia-refugio-distrito-arcos-argentina",
    meGusta: 0,
    noMeGusta: 0,
    nombre: "Cerveza Patagonia - Refugio Distrito Arcos",
    descripcion:
      "Excelente lugar para compartir un buen momento con amigos. Muy buen ambiente y excelente atencion de mica que nos hizo buenas recomendaciones !!! Una genia\nIdeal para tomar una birra de paso, tienen Happy Hour de 14 a 17 hs!\nFuimos con una amiga y la pasamos muy bien. La cerveza excelente y el ambiente muy agradable. Gracias a Caro por la gentileza y la buena atención.",
    fotoUrl:
      "https://lh3.googleusercontent.com/p/AF1QipNNJWAmwFTIVR8lb3LBmUo3AUAuaWD0Lgk0qlxG=s1600-w1024",
    direccion:
      "Paraguay 4979 Distrito Arcos Premium Outlet, BTA, C1425 CABA, Argentina",
    pais: "Argentina",
    ubicacionUrl: "https://maps.google.com/?cid=13111065320151527727",
    ubicacion: {
      type: "Point",
      coordinates: [-34.5807075, -58.4273042],
      index: "2dsphere",
    },
    galeria: [
      "https://lh3.googleusercontent.com/p/AF1QipNNJWAmwFTIVR8lb3LBmUo3AUAuaWD0Lgk0qlxG=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPe89nVnyfbbF4KPFUnqyfd72V4iEVkyzUED3Do=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipP5MhzfNfIB3pyGTYgQ74c_1osL2X1DMO3Pq-b6=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipN1R4NckWpYcbRouPtsyQebvw8mTu9MZ2UmIu7m=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipNBHHla_-vfOIsWw8C3BR1GMQ0KEL3pNEISW_28=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPhOXfc4oKHREeJW0RmhQgr84BGaz3GY0OJNhNF=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipOvSL9xQdVKYKROHUDf1u90GBy5jTU_-tLOlJWq=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipMwaWPwMI2YsvRBKJ4UuJuoNunx8vLTH6gGarKs=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipO_yQfssofnJAXRCwpYdlALzH1ImNDm5-1Y_5Fx=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipOl9r3jsrijjdOb4Q0pzs_o86i4zq-v7B7azoxw=s1600-w1024",
    ],
    contactos: [
      {
        redSocial: "website",
        link: "http://www.cervezapatagonia.com.ar/",
      },
      {
        redSocial: "whatsapp",
        link: "011 3691-7094",
      },
    ],
    caracteristicas: {},
    createdAt: "2020-11-15T23:32:03.529Z",
    updatedAt: "2020-11-15T23:32:03.529Z",
    deletedAt: null,
  },
  {
    slug: "chata-argentina",
    meGusta: 0,
    noMeGusta: 0,
    nombre: "Chata",
    descripcion: "",
    fotoUrl: "",
    direccion: "Güemes 4800-4702, C1414 CYQ, Buenos Aires, Argentina",
    pais: "Argentina",
    ubicacionUrl: "https://maps.google.com/?cid=13405881274380567982",
    ubicacion: {
      type: "Point",
      coordinates: [-34.58056080000001, -58.42533739999999],
      index: "2dsphere",
    },
    galeria: [],
    contactos: [
      {
        redSocial: "website",
      },
      {
        redSocial: "whatsapp",
      },
    ],
    caracteristicas: {},
    createdAt: "2020-11-15T23:31:58.144Z",
    updatedAt: "2020-11-15T23:31:58.144Z",
    deletedAt: null,
  },
  {
    slug: "colon-resto-bar-argentina",
    meGusta: 0,
    noMeGusta: 0,
    nombre: "Colon Resto Bar",
    descripcion: "",
    fotoUrl: "",
    direccion: "Fray Justo Sta. María de Oro 137, Buenos Aires, Argentina",
    pais: "Argentina",
    ubicacionUrl: "https://maps.google.com/?cid=1753928796375306957",
    ubicacion: {
      type: "Point",
      coordinates: [-34.5802021, -58.4251921],
      index: "2dsphere",
    },
    galeria: [],
    contactos: [
      {
        redSocial: "website",
      },
      {
        redSocial: "whatsapp",
      },
    ],
    caracteristicas: {},
    createdAt: "2020-11-15T23:31:55.246Z",
    updatedAt: "2020-11-15T23:31:55.246Z",
    deletedAt: null,
  },
  {
    slug: "coronados-de-birra-argentina",
    meGusta: 0,
    noMeGusta: 0,
    nombre: "Coronados De Birra",
    descripcion:
      "Muy rica la cerveza, me atendieron muy bien y muy amables. Recomiendo el lugar!!\nMuy buena cerveza y excelente atención! Altamente recomendable\nEs muy buena birra y buenas empanadas y arepas. Y esta abierto hoy sábado hasta las 6 am buena onda y buen precio",
    fotoUrl:
      "https://lh3.googleusercontent.com/p/AF1QipMv34GfTift9Ub_saQ4hm0Cwvs-ofswVxndSZej=s1600-w714",
    direccion: "Humboldt 2486, Buenos Aires, Argentina",
    pais: "Argentina",
    ubicacionUrl: "https://maps.google.com/?cid=442682313089128056",
    ubicacion: {
      type: "Point",
      coordinates: [-34.5780362, -58.4278003],
      index: "2dsphere",
    },
    galeria: [
      "https://lh3.googleusercontent.com/p/AF1QipMv34GfTift9Ub_saQ4hm0Cwvs-ofswVxndSZej=s1600-w714",
      "https://lh3.googleusercontent.com/p/AF1QipMFVv8osK7AWxvEClq-4AfuHlt146OpdkR_ERz1=s1600-w828",
      "https://lh3.googleusercontent.com/p/AF1QipMqIPUu_7z5nmkmo3l2Z2-ZRoRgRjct6FVd1-uK=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipNDdwFAfgLHOWyXHS1JAXPU63tIDD_5RZrozAgp=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipMpH4BtHfv09Ld9OzyqlSjprKEQKQvGuuNbxtLm=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPrR-_eV3WY8vNJy1S9Xx5viG7h5IODSyP7YomK=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipOvrAcebcnSJGTf3t--ZLv0yOx0cZ8ULxkz9Lr9=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipMZgwi33zQaUlHwXQok3j6_YQ2ZPYmS-_sIahl5=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipN9Y-hyZtPkTBCXl1FjKbY-ZFSU63ROrg_OXp6H=s1600-w1024",
    ],
    contactos: [
      {
        redSocial: "website",
        link:
          "https://coronados-de-birra.negocio.site/?utm_source=gmb&utm_medium=referral",
      },
      {
        redSocial: "whatsapp",
        link: "011 2633-1002",
      },
    ],
    caracteristicas: {},
    createdAt: "2020-11-15T23:31:52.329Z",
    updatedAt: "2020-11-15T23:31:52.329Z",
    deletedAt: null,
  },
  {
    slug: "imago-eventos-argentina",
    meGusta: 0,
    noMeGusta: 0,
    nombre: "Imago Eventos",
    descripcion: "",
    fotoUrl:
      "https://lh3.googleusercontent.com/p/AF1QipNFNn1Hs7ScGa5bWCA3jGtIZNAJzdDk0SVV6bwB=s1600-w717",
    direccion: "Beruti 4617, C1425BDE C1425BDE, Buenos Aires, Argentina",
    pais: "Argentina",
    ubicacionUrl: "https://maps.google.com/?cid=11092642561373982838",
    ubicacion: {
      type: "Point",
      coordinates: [-34.5774362, -58.4245153],
      index: "2dsphere",
    },
    galeria: [
      "https://lh3.googleusercontent.com/p/AF1QipNFNn1Hs7ScGa5bWCA3jGtIZNAJzdDk0SVV6bwB=s1600-w717",
      "https://lh3.googleusercontent.com/p/AF1QipOOk_I8bmUEU2PhaVuYHXI1bxE-faCHdjDQb9zr=s1600-w720",
    ],
    contactos: [
      {
        redSocial: "website",
        link: "http://eventosimago.com/",
      },
      {
        redSocial: "whatsapp",
        link: "011 6855-3938",
      },
    ],
    caracteristicas: {},
    createdAt: "2020-11-15T23:32:04.223Z",
    updatedAt: "2020-11-15T23:32:04.223Z",
    deletedAt: null,
  },
  {
    slug: "la-areperia-de-buenos-aires-argentina",
    meGusta: 0,
    noMeGusta: 0,
    nombre: "La Arepería de Buenos Aires",
    descripcion:
      "Todo muy rico y buen servicio mi novio no es celiaco y tenia opciones p el tambien\nFantastica! Todo rico y a buen precio. Cocinan sin tacc y preparan para llevar\nRica la comida, los jugos y licuados naturales y sabrosos. Cálida atención. Hacia mucho calor y no estaba adecuadamente acondicionado. Esperábamos estar más frescos por un rato. Estéticamente sencillo. Agradable.",
    fotoUrl:
      "https://lh3.googleusercontent.com/p/AF1QipOBtMF3Ou41YYF-UEpb2VNwmrVjp334RwPmy9Ku=s1600-w1024",
    direccion: "C1425FWH, Bonpland 2430, C1425FWH CABA, Argentina",
    pais: "Argentina",
    ubicacionUrl: "https://maps.google.com/?cid=10104245640879037876",
    ubicacion: {
      type: "Point",
      coordinates: [-34.5775193, -58.43091339999999],
      index: "2dsphere",
    },
    galeria: [
      "https://lh3.googleusercontent.com/p/AF1QipOBtMF3Ou41YYF-UEpb2VNwmrVjp334RwPmy9Ku=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipN_nOCBDzGk4EsRIbIpLazN5UlFkiIe6Ad2gED-=s1600-w960",
      "https://lh3.googleusercontent.com/p/AF1QipMqpAz8BfEWcCEpv0vQ3OSB4VfU5IITfnEL2Pva=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipMnKV9Zn4iCkKXbrsn-718jO8s0dARv9rXlSrh5=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPKtRrJ44V3TfyleIBcf2_-9zVYV4w3dDvR7Je_=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipMexSkoQ8ldra3y0YvD-AQ4m1g3O7a-iul59G2G=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipOEE-rPDGHemnSomKf1f8Shq829vcYFQWn9VIYm=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPPlpdo0H_AVlXQRgvEtkeigRE2gaRDdLZVZfdh=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipMdxH4XHzoFxRGasyzgOQ7-71zNX-dyum1sfdXw=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPjucrN2_ubxhiSdulPfIrHIaOXrYetyncp-Xcd=s1600-w1024",
    ],
    contactos: [
      {
        redSocial: "facebook",
        link: "https://www.facebook.com/laareperiadebuenosaires",
      },
      {
        redSocial: "whatsapp",
        link: "011 4774-0308",
      },
    ],
    caracteristicas: {},
    createdAt: "2020-11-15T23:31:46.230Z",
    updatedAt: "2020-11-15T23:31:46.230Z",
    deletedAt: null,
  },
  {
    slug: "la-espuma-de-los-dias-argentina",
    meGusta: 0,
    noMeGusta: 0,
    nombre: "La Espuma de los Días",
    descripcion:
      "La mejor birra artesanal con un excelente jazz de fondo. 100% recomendado.\nMuy rica cerveza y excelente atención\nBuen sitio\nFalta algo para picar. La birra muy buena\nSólo pase por la puerta, pero la se nota la cordialidad de los empleados!",
    fotoUrl:
      "https://lh3.googleusercontent.com/p/AF1QipOpwEpjfMuLUNt6PjjDlCk1hQMT98TAuN-nqrxI=s1600-w1024",
    direccion: "Güemes 4818, Buenos Aires, Argentina",
    pais: "Argentina",
    ubicacionUrl: "https://maps.google.com/?cid=12537090335483533888",
    ubicacion: {
      type: "Point",
      coordinates: [-34.58025140000001, -58.4255786],
      index: "2dsphere",
    },
    galeria: [
      "https://lh3.googleusercontent.com/p/AF1QipOpwEpjfMuLUNt6PjjDlCk1hQMT98TAuN-nqrxI=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipNVjLSVres4qy1DKeO4Sswhx1-T_QqYl_3IV2l9=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPRTBlMG_2ZJ1kIi6Y1s6c1SDaViZ4Fo5d5pxu9=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPNNsQBF9Ar-_WRisqfNtSZaLwUuqxWxhrMt80K=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipN2N2_ZC1kxP4xdKLen4wgKOjlG227SITKvJT6F=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipNTUSB-IN0RyVVlP3OUe3prRn4oB9fw5S83JO8L=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPWlTVY8bqSrcCWBkCRtQ4FCjJE5oclW6xx7tCM=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipM2n14i2b8NqFc7r67ATikJnzDguURKWEWVhs4W=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPC2-tatziP9lWStJ4G9opnNZxgf0Vum804PPia=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPxCqZTtJDCLxHsnl6h627xHY-cBa8b-c_pezuu=s1600-w1024",
    ],
    contactos: [
      {
        redSocial: "facebook",
        link: "https://www.facebook.com/barlaespumadelosdias/",
      },
      {
        redSocial: "whatsapp",
        link: "011 5347-1666",
      },
    ],
    caracteristicas: {},
    createdAt: "2020-11-15T23:31:54.981Z",
    updatedAt: "2020-11-15T23:31:54.981Z",
    deletedAt: null,
  },
  {
    slug: "la-jungla-argentina",
    meGusta: 0,
    noMeGusta: 0,
    nombre: "La Jungla",
    descripcion: "",
    fotoUrl: "",
    direccion: "Güemes 4744,C1425BNT, C1425BNT CABA, Argentina",
    pais: "Argentina",
    ubicacionUrl: "https://maps.google.com/?cid=11497908146810834878",
    ubicacion: {
      type: "Point",
      coordinates: [-34.5806936, -58.4250411],
      index: "2dsphere",
    },
    galeria: [],
    contactos: [
      {
        redSocial: "website",
        link: "http://www.lajungla.com.ar/",
      },
      {
        redSocial: "whatsapp",
        link: "5455-0170",
      },
    ],
    caracteristicas: {},
    createdAt: "2020-11-15T23:31:38.123Z",
    updatedAt: "2020-11-15T23:31:38.123Z",
    deletedAt: null,
  },
  {
    slug: "la-nina-de-oro-argentina",
    meGusta: 0,
    noMeGusta: 0,
    nombre: "La Niña de Oro",
    descripcion:
      "Un buen licuado no puede faltar cuando paso por ahi\nExcelente sándwich de milanesa.\nEl bar está bien. La panadería es tremenda. Los sandwiches triples son de gran variedad y muy buena calidad.\nBuen lugar para disfrutar un buen rato agradable  con amigos buena vista",
    fotoUrl:
      "https://lh3.googleusercontent.com/p/AF1QipMXhYp0jxwv02LWbXz7rewymIf1e3PMqZE_6VJe=s1600-w1024",
    direccion: "Av. Santa Fe 4496, C1425 CABA, Argentina",
    pais: "Argentina",
    ubicacionUrl: "https://maps.google.com/?cid=7296636602384015684",
    ubicacion: {
      type: "Point",
      coordinates: [-34.57955200000001, -58.4244473],
      index: "2dsphere",
    },
    galeria: [
      "https://lh3.googleusercontent.com/p/AF1QipMXhYp0jxwv02LWbXz7rewymIf1e3PMqZE_6VJe=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipN-1b9J5asheQZBl9zI9DypAsgj2z3QVPDOgDKo=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipOk9r3d-RHz92zafhLUw3sqjQ5NY0cJGkKOeID0=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPCju9plkXVYdxFe7qqzvTVzmTRa4gr32Meh-CP=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipNSni-im2UBuIaqCj-pFKYOnK0QCwV4MT-6HOIH=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPW2y5Z6DQ5TyoxZCCWn26w_iyIyloobpFkicFe=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipP3aJV9qnv5H09ZdKb08G91F2yFq3x8XOkYhEql=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipMjPCZIIQJjYA8OU2aZmayJl0KI3AAi5K10WTYT=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipMQCLGVcZ350W6dWlkuRuBQ_ffEPlSmpvmxmbfj=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipO_BEMadcO3GD--Sbuv47YwgRCNz5C7NuYNBYxy=s1600-w1024",
    ],
    contactos: [
      {
        redSocial: "facebook",
        link: "https://www.facebook.com/laninadeororestaurant-105328851236167",
      },
      {
        redSocial: "whatsapp",
        link: "011 4772-9989",
      },
    ],
    caracteristicas: {},
    createdAt: "2020-11-15T23:31:57.893Z",
    updatedAt: "2020-11-15T23:31:57.893Z",
    deletedAt: null,
  },
  {
    slug: "litos-argentina",
    meGusta: 0,
    noMeGusta: 0,
    nombre: "Lito's",
    descripcion:
      "Me sorprendió gratamente, la atención , el precio y el producto final.\nEs para comer al paso, pero muy barato y muy bueno para lo que cuesta\nUn buen lugar para comer, buen menú para la gente de paso\nRápido, simple y sencillo ideal para comer al paso\nMuy buen lugar!!!",
    fotoUrl:
      "https://lh3.googleusercontent.com/p/AF1QipM3AtyqncT1aSk3-o3trWubCdKzc6FisGUSEF4v=s1600-w1024",
    direccion: "Av. Santa Fe 4640, C1425 BHV, Buenos Aires, Argentina",
    pais: "Argentina",
    ubicacionUrl: "https://maps.google.com/?cid=242545126365004775",
    ubicacion: {
      type: "Point",
      coordinates: [-34.5784606, -58.42603889999999],
      index: "2dsphere",
    },
    galeria: [
      "https://lh3.googleusercontent.com/p/AF1QipM3AtyqncT1aSk3-o3trWubCdKzc6FisGUSEF4v=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipNjoz1UzCNR-W-qhouioTW4rdeHFX4HYS9avqwT=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipO2gQwJHpyD4627ojLMSRGEFcu0XDNnbDnRiDsf=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipMaewh9ANYVSYC_t6qdeBXqoojCn4S_iedwwBfV=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipM_jc99AdW-tx03YQaCLAACMb6VKx_R1S4kJBKB=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipMFKfrkZ040wo2mUzbZZ3ByBowlEC1vDWFwhrSL=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPYGAO_wtn0rlaRdGB5imnmT6F7vj04PAqlMDmY=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipO75jg5BaUxMZIp6vzpc-YVAMHdykWDr46Y4rlD=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipOwo4ctLJ_jJdsWzZzU3VCP1t70TaH4wamMn4Sj=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipOzdQqYoDcZy4Df7J7caN_ZGe-8YSZAFefCTsPE=s1600-w1024",
    ],
    contactos: [
      {
        redSocial: "website",
      },
      {
        redSocial: "whatsapp",
        link: "011 4775-4306",
      },
    ],
    caracteristicas: {},
    createdAt: "2020-11-15T23:31:49.892Z",
    updatedAt: "2020-11-15T23:31:49.892Z",
    deletedAt: null,
  },
  {
    slug: "los-recuerdos-de-ella-argentina",
    meGusta: 0,
    noMeGusta: 0,
    nombre: "Los recuerdos de ella",
    descripcion: "Buen ambiente\n\n\nUn poco chico. Le falta magia\n",
    fotoUrl:
      "https://lh3.googleusercontent.com/p/AF1QipOnc72qlkq5GReich7bwUG2lQhXuqpw15068px5=s1600-w1024",
    direccion:
      "C1425FOF, Fray Justo Sta. María de Oro 2280, C1425FOF CABA, Argentina",
    pais: "Argentina",
    ubicacionUrl: "https://maps.google.com/?cid=625156385856629514",
    ubicacion: {
      type: "Point",
      coordinates: [-34.58153900000001, -58.42671009999999],
      index: "2dsphere",
    },
    galeria: [
      "https://lh3.googleusercontent.com/p/AF1QipOnc72qlkq5GReich7bwUG2lQhXuqpw15068px5=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipOyMmIcU58mLbKoYJdcfPCnfUzEwblkLDVHQB7d=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipP5Rnx97k1N0JY0khq46mDLDRwN6FchnqurhKef=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipNLg3HmIH6mE5J_ySohmhffhUd60bxIpQi8FWAc=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipO32yhi2S2B4UUuh6FWX12pYajAIhzflACgZDVf=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipNxeQd9SgJ3GceG2PXS3qQQJ2GLHIYXFztPqQZx=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPE_-jMoJ0OLh6XttJ6B9CWQaab0ZFYKkNSOZ-6=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPXd-2gaGpOFq1QJYPsXytxLPZameuqsS54V9Pv=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipMc9AxGJnKm5Xrk8VWxXSMN-R4lRPtUM9-9oeTX=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPxe7kXp2HHQreSH35arEMBiRWiNPAJtbBK7lg4=s1600-w1024",
    ],
    contactos: [
      {
        redSocial: "facebook",
        link: "http://www.facebook.com/Los-Recuerdos-De-Ella-469245569930718/",
      },
      {
        redSocial: "whatsapp",
        link: "011 3237-8840",
      },
    ],
    caracteristicas: {},
    createdAt: "2020-11-15T23:31:40.727Z",
    updatedAt: "2020-11-15T23:31:40.727Z",
    deletedAt: null,
  },
  {
    slug: "maldini-argentina",
    meGusta: 0,
    noMeGusta: 0,
    nombre: "Maldini",
    descripcion:
      "Buen lugar\nHermosa ubicación y ambientación del local. Excelente menú y tragos! Recomiendo fuertemente ir a ver algún artista en vivo ya que es una experiencia divina\nLa pizza es muy rica, aunque un poco cara.\nExcelente opción para tomar una cerveza buena y comer algo al paso!",
    fotoUrl:
      "https://lh3.googleusercontent.com/p/AF1QipMpX9eQU-3b1wD14Z0DLvIZ1PfxhV6YLDrJcPk1=s1600-w1024",
    direccion: "Paraguay 4979, C1425 BTC, Buenos Aires, Argentina",
    pais: "Argentina",
    ubicacionUrl: "https://maps.google.com/?cid=12413220354036787989",
    ubicacion: {
      type: "Point",
      coordinates: [-34.5812052, -58.42818140000001],
      index: "2dsphere",
    },
    galeria: [
      "https://lh3.googleusercontent.com/p/AF1QipMpX9eQU-3b1wD14Z0DLvIZ1PfxhV6YLDrJcPk1=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipMB5ObYGcLiUQlUWf-Wt09NPNOwjkuWGsbKlxKH=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipOzDJHxEDONOQlUw8ngos-PhOIzxTR17RWdF-_J=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipONVGisogTqb4A8nstETItDBWt2QmJBPJg8faa0=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPFcDKb2qaHM1ISyfNjY6AEiZOV9ceX2ZMRP2al=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPDGbR7wwhz8Ko1bZvMN5XqKL5XURzzgpQ2ekE1=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipNPafF3WkmvWudbzOfm4dDcJG5V-fnYVuo5o-qq=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipMjGX3cXXbj8aacNU-plwOI_3WMs2A8EmtiTsHN=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipOfvoli4r4nHx_LBztVPUP-CakTrKfSSWIWQt14=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipN5bI-vGTHeuV5mhOdipu_GoB7ZYEIh8joHvl2D=s1600-w1024",
    ],
    contactos: [
      {
        redSocial: "website",
        link: "https://ersaba.co/",
      },
      {
        redSocial: "whatsapp",
        link: "011 7366-6280",
      },
    ],
    caracteristicas: {},
    createdAt: "2020-11-15T23:32:12.560Z",
    updatedAt: "2020-11-15T23:32:12.560Z",
    deletedAt: null,
  },
  {
    slug: "patagonia-argentina",
    meGusta: 0,
    noMeGusta: 0,
    nombre: "Patagonia",
    descripcion:
      "Excelente oasis en medio de tu rutina diaria! 🍻\nLindo stand de Patagonia, increíble el trato de Micaela que nos comentó como estaban hechas las cervezas . Gracias !\nMuy bien puesto este Patagonia. Voy siempre. Mica, Caro y Ariel atienden muy bien\nMuy buena atención, buena birra, precio medio y pocas sillas.",
    fotoUrl:
      "https://lh3.googleusercontent.com/p/AF1QipPGFfYiT2zCt1nwCIaN2Fln_5rVTM_IZXeJt42u=s1600-w1024",
    direccion: "C1425FQH, Godoy Cruz 2502, C1425FQH CABA, Argentina",
    pais: "Argentina",
    ubicacionUrl: "https://maps.google.com/?cid=9490815070867851954",
    ubicacion: {
      type: "Point",
      coordinates: [-34.58062330000001, -58.42745959999999],
      index: "2dsphere",
    },
    galeria: [
      "https://lh3.googleusercontent.com/p/AF1QipPGFfYiT2zCt1nwCIaN2Fln_5rVTM_IZXeJt42u=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipOq8P5TMkP4DCjwqsebAanqgSRZAWT9DdNlCQ7J=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPQWu5jOYn1Z-IO5cAYLV6QgmjU9SFaihxgDlYa=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipOf9HwFJw-fBOtVQFHFiqV8EdLE7F75Tv8IU0Ab=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPUlkr0lL758WXuCOzc6rZAcu4hmjBNQ1T2sBuS=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPaKcUtrXBlZjF2XC6GDuJiKU025Y_XFQxuH_00=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipM9uVlfAa6dy-N06TgYAwNZ4HpGouZTLlUwmsbF=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPBHBdY7v07ka8xSRuGKVZTCw7nVOW00-hXomaj=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipNH9jkVO3gxeYEE9H2usq_qLWA6M2yWakjpYhtl=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipNS-Es9J2xx-oRqZ-y3snganKfRk_D0HpRHFJx2=s1600-w1024",
    ],
    contactos: [
      {
        redSocial: "website",
      },
      {
        redSocial: "whatsapp",
      },
    ],
    caracteristicas: {},
    createdAt: "2020-11-15T23:32:00.794Z",
    updatedAt: "2020-11-15T23:32:00.794Z",
    deletedAt: null,
  },
  {
    slug: "restaurant-humberto-pejeda-argentina",
    meGusta: 0,
    noMeGusta: 0,
    nombre: "Restaurant Humberto Pejeda",
    descripcion: "Buen lugar para comer.\nMuito bom\n",
    fotoUrl: "",
    direccion: "Av. Santa Fe 4448, C1425 BHT, Buenos Aires, Argentina",
    pais: "Argentina",
    ubicacionUrl: "https://maps.google.com/?cid=9740792106612521570",
    ubicacion: {
      type: "Point",
      coordinates: [-34.5797988, -58.4239476],
      index: "2dsphere",
    },
    galeria: [],
    contactos: [
      {
        redSocial: "website",
      },
      {
        redSocial: "whatsapp",
      },
    ],
    caracteristicas: {},
    createdAt: "2020-11-15T23:32:07.254Z",
    updatedAt: "2020-11-15T23:32:07.254Z",
    deletedAt: null,
  },
  {
    slug: "the-king-coffee-argentina",
    meGusta: 0,
    noMeGusta: 0,
    nombre: "The King Coffee",
    descripcion:
      "Excelente atención calidad-precio ambiente familiar muy recomendable!\nExcelente cafe y tostado. La atencion de 10\nMuy buena atención\nLo mejor atención de la zona  vocación de servicio 100%\nMuy buenooo",
    fotoUrl:
      "https://lh3.googleusercontent.com/p/AF1QipOX51OrdEq4Dj_UVJMQJETEBV9YB6smpNmHXsUz=s1600-w1024",
    direccion: "Humboldt 2414, C1425 FUH, Buenos Aires, Argentina",
    pais: "Argentina",
    ubicacionUrl: "https://maps.google.com/?cid=7428736343858950354",
    ubicacion: {
      type: "Point",
      coordinates: [-34.5790537, -58.42895069999999],
      index: "2dsphere",
    },
    galeria: [
      "https://lh3.googleusercontent.com/p/AF1QipOX51OrdEq4Dj_UVJMQJETEBV9YB6smpNmHXsUz=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipNaa1dOEUsvvO1tQY-LQVihQcTu-LAIK0flg97z=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipOO6KDF61CoXMnByp7pWhR41STfcQlZF1fo8nf2=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPA14LiFo4c3fx-DCEx9e08S6TvCfJM76_hSz_L=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPBwSJIW8PDcoscZHBHXzly3Zhpuxml31wFGSor=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPdQ-x8pcH_ZqL0QxSBdU8gBrSVDG1VaBaK6nNy=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipOPo_AC9F8IQjYYm6MOQ6Tg6TtrOhXr0OKgR_hR=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipNrW0CvNy8wBPKpWYW3C5WY9wqHgMKKdMpsUVHR=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipOvpxuEsfGxZwgDqUo15OuwtAuSgqxf0juQbx94=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipMvu7BZlJp2fdUmIA-ph7ZyIUVfmsMpqjDe0Fn8=s1600-w1024",
    ],
    contactos: [
      {
        redSocial: "facebook",
        link: "http://www.facebook.com/thekingcoffeoriginal",
      },
      {
        redSocial: "whatsapp",
        link: "011 4771-3367",
      },
    ],
    caracteristicas: {},
    createdAt: "2020-11-15T23:31:38.059Z",
    updatedAt: "2020-11-15T23:31:38.059Z",
    deletedAt: null,
  },
  {
    slug: "wherever-argentina",
    meGusta: 0,
    noMeGusta: 0,
    nombre: "Wherever",
    descripcion:
      "Un lugar muy bueno! Buen menú, precios excelentes. Y una gran variedad de whiskys con explicación e historia incluida! Lugar super recomendable.\nMuy tranquilo el ambiente, buena atencion. La cerveza muy buena y a buen precio. Ambiente intimo\nMuy buen bar en la zona de Plaza Italia.",
    fotoUrl:
      "https://lh3.googleusercontent.com/p/AF1QipNNv65QOwntHcXeMFv28AfUQdGQs0EMkS-KNHh9=s1600-w1024",
    direccion:
      "Fray Justo Sta. María de Oro 2476, C1425 FOJ, Buenos Aires, Argentina",
    pais: "Argentina",
    ubicacionUrl: "https://maps.google.com/?cid=1310810529735506593",
    ubicacion: {
      type: "Point",
      coordinates: [-34.579662, -58.424896],
      index: "2dsphere",
    },
    galeria: [
      "https://lh3.googleusercontent.com/p/AF1QipNNv65QOwntHcXeMFv28AfUQdGQs0EMkS-KNHh9=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipP-O8kz1cfSb-mETuhY2_P8oXxjjKLmyfP6Qv7w=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipOnPu2brJKVO34ei_ac3-t-d24zsnTZ5DttP591=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipMsaKtMVS4OymxvFZpD0WZDOdElWT6wOz4IR9ZT=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipMxUH-n2nsqVsWZSAVPfTKusw8KCox-aVi3p6aK=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipNIKY5drK0kKIpmz25g58a_EZCjV9EI90WmSV2z=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipOduDedVrfwO9GihXldfcNtDdeFJT90jNYXjB1x=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPcqQFCgVwimqiq7BYxTXscOT4gurLcTH_bjoT5=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPt0QXjZ_14qOc587oC9831fQvGF8zS13lkxY6P=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipNUDwKFSoW_IasO8kMiyozwiGaENBRFqS6RJt77=s1600-w1024",
    ],
    contactos: [
      {
        redSocial: "instagram",
        link: "https://instagram.com/wherever.bar",
      },
      {
        redSocial: "whatsapp",
        link: "011 4777-8029",
      },
    ],
    caracteristicas: {},
    createdAt: "2020-11-15T23:31:43.493Z",
    updatedAt: "2020-11-15T23:31:43.493Z",
    deletedAt: null,
  },
  {
    slug: "yolo-bar-argentina",
    meGusta: 0,
    noMeGusta: 0,
    nombre: "Yolo Bar",
    descripcion:
      "Excelente atención y muy buena comida\nRiquísima la IPA y la Honey, muy buena onda el lugar!\nLugar de buena música y la comida exquisita!!!\nMuy buena atención! Comida excelente! Frente al shopping Arcos!\nExcelente atención, ambiente agradable y muy ricas cervezas. Agregaría más opciones vegetarianas/veganas.",
    fotoUrl:
      "https://lh3.googleusercontent.com/p/AF1QipNN28fy2szw_XGLu2JcsdOweljLOvqBkSl1H5-z=s1600-w1024",
    direccion: "Charcas 4800, C1425 BNT, Buenos Aires, Argentina",
    pais: "Argentina",
    ubicacionUrl: "https://maps.google.com/?cid=15319089359383622306",
    ubicacion: {
      type: "Point",
      coordinates: [-34.5809484, -58.4270705],
      index: "2dsphere",
    },
    galeria: [
      "https://lh3.googleusercontent.com/p/AF1QipNN28fy2szw_XGLu2JcsdOweljLOvqBkSl1H5-z=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipNtWaRSZ9DSHf0qECAIb3W5aN-dluGgmGNITGET=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipOax7HcZZwJrap3aaTiHm2DvxTRBGx-0TcbyM-r=s1600-w960",
      "https://lh3.googleusercontent.com/p/AF1QipO42RW3gGx8AQpkbcHQopKitne4ivp9SjM0qqYY=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipPGBUHUMIYGOoasBzaDC36h1NpjpwZBOmRcNOw=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipOZZYZACuV-oVanQ1di9gMm7qLq9iyZjqFbZOp-=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipOXa4GEzsO3sP5VIFuWnTcYg35w_m5bPeUcDax8=s1600-w960",
      "https://lh3.googleusercontent.com/p/AF1QipOD3jhtL5EUfpYb8k9Dt_TEvdfAGcUemBSCyae6=s1600-w960",
      "https://lh3.googleusercontent.com/p/AF1QipPLndWDP3G9jGMJqUlSMs6Ad2rxV6l2LLR1M1b-=s1600-w1024",
      "https://lh3.googleusercontent.com/p/AF1QipNc0Rm3UfLuIj5S-6htrgjTBbaerJ3ARpgZFGXI=s1600-w1024",
    ],
    contactos: [
      {
        redSocial: "website",
        link: "http://www.yolobar.com.ar/",
      },
      {
        redSocial: "whatsapp",
        link: "011 6819-6898",
      },
    ],
    caracteristicas: {},
    createdAt: "2020-11-15T23:32:06.863Z",
    updatedAt: "2020-11-15T23:32:06.863Z",
    deletedAt: null,
  },
];

router.post("/", async (request, response) => {
  const bares = await db.get("bares");

  bares.createIndex({ slug: 1 }, { unique: true });
  bares.createIndex({ ubicacion: "2dsphere" });

  let migration = baresSeed;
  migration = imagesMigration;

  for (const bar of migration) {
    const existe = await bares.findOne({
      slug: bar.slug,
    });

    if (!existe) {
      await bares.insert(bar);
    } else {
      await bares.findOneAndUpdate(
        {
          slug: bar.slug,
        },
        {
          $set: {
            galeria: bar.galeria,
            fotoUrl: bar.fotoUrl ? bar.fotoUrl : "",
          },
        }
      );
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
