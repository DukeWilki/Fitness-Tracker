const express = require("express");
const path = require("path");
const { update } = require("../models/workout");
const Workout = require("../models/workout");


const router = express.Router();

router.get("/api/workouts", function (req, res) {
  console.log("hello, GET route ran");
  // res.end()
  Workout.find({}).then(
    (workouts) => {
      // console.log(workouts);
      res.json(workouts);
    }
  )
});

router.put("/api/workouts/:id", function (req, res) {
  console.log("hello, PUT route ran");

    Workout.findOneAndUpdate({_id: req.params.id}, {$push: {exercises: req.body}, $inc: {totalDuration: req.body.duration} }).then(updatedWorkout => {
      res.json(updatedWorkout);
    }
    )

});

router.post("/api/workouts", function (req, res) {
  console.log("hello, PUSH route started");
    var workout = new Workout();
    workout.save(function (err) {
        if (err) {
        // saved!
        console.log(err);
        }
    })
    res.json(workout);
});

router.get("/api/workouts/range", function (req, res) {
  console.log("hello, GET RANGE route ran");
});

module.exports = router