const express = require("express");
const path = require("path");
const { update } = require("../models/workout");
const Workout = require("../models/workout");

const router = express.Router();

router.get("/api/workouts", function (req, res) {
  Workout.find({}).then((workouts) => {
    res.json(workouts);
  });
});

router.put("/api/workouts/:id", function (req, res) {
  Workout.findOneAndUpdate(
    { _id: req.params.id },
    {
      $push: { exercises: req.body },
      $inc: { totalDuration: req.body.duration },
    }
  ).then((updatedWorkout) => {
    res.json(updatedWorkout);
  });
});

router.post("/api/workouts", function (req, res) {
  var workout = new Workout();
  workout.save(function (err) {
    if (err) {
      console.log(err);
    }
  });
  res.json(workout);
});

router.get("/api/workouts/range", function (req, res) {
  Workout.find({}).then((workouts) => {
    res.json(workouts);
  });
});

module.exports = router;
