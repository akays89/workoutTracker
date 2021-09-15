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





module.exports = router;