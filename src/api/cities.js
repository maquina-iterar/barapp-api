const express = require("express");
const nearbyCities = require("nearby-cities");

const router = express.Router();

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
