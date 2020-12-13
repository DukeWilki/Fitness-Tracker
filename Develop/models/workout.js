const mongoose = require("mongoose");

const Schema = mongoose.Schema;

onst workoutSchema = new Schema({
    exercises: [
    name: {
      type: String,
      trim: true,
      required: "Enter a name for workout"
    },
    type: {
      type: String,
      trim: true,
      required: "Resistance or cardio"
    },
    distance: {
      type: Number,
      required: "Enter distance"
    },
    duration: {
      type: Number,
      required: "Enter number of minutes"
    },
    weight: {
      type: Number,
      required: "Enter weight lifted"
    },
    sets: {
      type: Number,
      required: "Enter number of sets"
    },
    reps: {
      type: Number,
      required: "Enter number of reps"
    },
    ],
    date: {
      type: Date,
      default: Date.now
    }
  });
  
  const Workout = mongoose.model("Workout", workoutSchema);
  
  module.exports = Workout;
  