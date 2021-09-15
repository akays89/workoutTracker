const router = require("express").Router();
const Workout = require("../models").Workout;

// get all workouts
router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration"}
            }
        }
    ])
    .then(data => {
        res.json(data)
    })
    .catch (err => {
        res.json(err);
    });
});

// create a new workout
router.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
        .then(data => {
            res.json(data)
        })
        .catch (err => {
            res.json(err);
        });
});







module.exports = router;