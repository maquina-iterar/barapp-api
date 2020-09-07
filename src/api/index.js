const express = require("express");

const bares = require("./bares");
const seed = require("./seed");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/bares", bares);
router.use("/seed", seed);

module.exports = router;
