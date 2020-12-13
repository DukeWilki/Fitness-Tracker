const express = require("express");
const path = require("path");

const router = express.Router();
router.get("/exercise", function (req, res) {
    console.log("hello");
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

module.exports = router