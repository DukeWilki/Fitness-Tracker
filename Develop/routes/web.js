const express = require("express");
const path = require("path");

const router = express.Router();
router.get("/exercise", function (req, res) {
    console.log("hello, exercise route ran");
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", function (req, res) {
  console.log("hello, stats route ran");
res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router