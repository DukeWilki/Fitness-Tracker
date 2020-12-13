const express = require("express");
const path = require("path");
const Workout = require("../models/workout");


const router = express.Router();

router.get("/api/workouts", function (req, res) {
});

router.put("/api/workouts/:id", function (req, res) {
});

router.post("/api/workouts", function (req, res) {

    var workout = new Workout(req.body);
    workout.save(function (err) {
        if (err) {
        // saved!
        console.log(err);
        }
    })


});

router.get("/api/workouts/range", function (req, res) {
});

module.exports = router