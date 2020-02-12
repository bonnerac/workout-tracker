const router = require("express").Router();
const path = require('path');
const Workout = require("../models");


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
    Workout.findOne({
        where: {
            id: req.params.id
        }
    }).then(function (dbWorkout) {
        res.json(dbWorkout);
    });
});
router.get("/api/workouts", (req, res) => {
    Workout.findOne({
        where: {
            id: req.params.id
        }
    }).then(function (dbWorkout) {
        res.json(dbWorkout);
    });
});

router.post("/api/workouts", (req, res) => {
    Workout.updateOne({
        where: {
            id: req.params.id
        }
    }).then(function (dbWorkout) {
        res.json(dbWorkout);
    });
});
router.get("api/workouts/range", (req, res) => {
    Workout.findOne({
        where: {
            range: req.params.id
        }
    }).then(function (dbWorkout) {
        res.json(dbWorkout);
    });
});

module.exports = router;