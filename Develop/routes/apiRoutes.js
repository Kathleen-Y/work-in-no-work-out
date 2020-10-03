const router = require("express").Router();
const db = require("../models")

router.get("/api/budgets", function(req, res) {
    db.Budget.find({}).then(function (results){
        res.json(results)
    })
})

router.post("/api/budgets", function (req, res) {
    db.Budget.create(req.body).then(function (results){
        res.json(results)
    })
})

router.put("/api/budgets/:id", function(req, res) {
    db.Budget.update({_id: req.params.id}, {
        $push: {exercises: req.body}
    }).then(function(results){
        res.json(results)
    })
})

router.get("/api/budgets/range", function(req, res) {
    db.Budget.find({}).limit(5).then(function (results){
        res.json(results)
    })
})

module.exports = router
