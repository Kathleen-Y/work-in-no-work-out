let mongoose = require("mongoose");
let db = require("../models");
mongoose.connect("mongodb://localhost/tracker", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let trackerSeed = [
  {
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: "Resistance",
        name: "Bicep Curl",
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-9),
    exercises: [
      {
        type: "Resistance",
        name: "Lateral Pull",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-8),
    exercises: [
      {
        type: "Resistance",
        name: "Push Press",
        duration: 25,
        weight: 185,
        reps: 8,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-7),
    exercises: [
      {
        type: "Cardio",
        name: "Running",
        duration: 25,
        distance: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-6),
    exercises: [
      {
        type: "Resistance",
        name: "Arm curls",
        duration: 30,
        weight: 260,
        reps: 20,
        sets: 5
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-5),
    exercises: [
      {
        type: "Resistance",
        name: "Leg Reps",
        duration: 30,
        weight: 360,
        reps: 20,
        sets: 6
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-4),
    exercises: [
      {
        type: "Resistance",
        name: "Quad Press",
        duration: 30,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-3),
    exercises: [
      {
        type: "Resistance",
        name: "Bench Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-2),
    exercises: [
      {
        type: "Resistance",
        name: "Military Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-1),
    exercises: [
      {
        type: "Resistance",
        name: "Bench",
        duration: 30,
        distance: 2
      }
    ]
  }
];

db.Tracker.deleteMany({})
  .then(() => db.Tracker.collection.insertMany(trackerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  deleteMany.catch(err => {
    console.error(err);
    process.exit(1);
  });