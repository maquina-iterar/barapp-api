const express = require("express");

const bares = require("./bares");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/bares", bares);

module.exports = router;
