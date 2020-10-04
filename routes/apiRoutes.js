const router = require("express").Router();
const db = require("../models")

router.get("/api/tracker", function(req, res) {
    db.Tracker.find({}).then(function (results){
        res.json(results)
    })
})

router.post("/api/tracker", function (req, res) {
    db.Tracker.create(req.body).then(function (results){
        res.json(results)
    })
})

router.put("/api/tracker/:id", function(req, res) {
    db.Tracker.update({_id: req.params.id}, {
        $push: {exercises: req.body}
    }).then(function(results){
        res.json(results)
    });
});

router.get("/api/tracker/range", function(req, res) {
    db.Tracker.find({}).limit(5).then(function (results){
        res.json(results)
    });
});

module.exports = router;
