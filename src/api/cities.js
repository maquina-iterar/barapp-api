const express = require("express");
const nearbyCities = require("nearby-cities");
const cities = require("all-the-cities");
const Fuse = require("fuse.js");

const router = express.Router();

router.get("/", async (request, response, next) => {
  try {
    const { search } = request.query;

    const options = {
      keys: ["name", "country"],
      shouldSort: false
    };

    const fuse = new Fuse(cities, options);
    const result = fuse.search(search);

    response.json(result.slice(0, 100).map((x) => x.item));
  } catch (error) {
    next(error);
  }
});

router.get("/location", async (request, response, next) => {
  try {
    const { latitude, longitude } = request.query;

    if (!latitude || !longitude) {
      throw new Error("Missing latitude and/or longitude.");
    }

    const [myCity] = nearbyCities(
      {
        latitude: +latitude,
        longitude: +longitude,
      },
      1
    );

    response.json(myCity);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
