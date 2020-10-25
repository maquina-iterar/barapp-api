const express = require("express");

const seed = require("./seed");
const bares = require("./bares");
const cities = require("./cities");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/seed", seed);
router.use("/bares", bares);
router.use("/cities", cities);

module.exports = router;
