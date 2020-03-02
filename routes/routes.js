const router = require("express").Router();
const path = require('path');
const db = require("../models");


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
})

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
})

router.put("/api/workouts:id", function (req, res) {
    console.log("Hitting Route");
    db.Workout.update({
        where: {
            id: req.params.id
        }
    }).then(function (dbWorkout) {
        res.json(dbWorkout);
    });
});
router.get("/api/workouts", (req, res) => {
    db.Workout.find({
        where: {
            id: req.params.id
        }
    }).then(function (dbWorkout) {
        res.json(dbWorkout);
    });
});

router.post("/api/workouts", (req, res) => {
    db.Workout.update({
        where: {
            id: req.params.id
        }
    }).then(function (dbWorkout) {
        res.json(dbWorkout);
    });
});
router.get("api/workouts/range", (req, res) => {
    db.Workout.find({
        where: {
            range: req.params.id
        }
    }).then(function (Workout) {
        res.json(dbWorkout);
    });
});

module.exports = router;