const router = require("express").Router()
const path = require("path");

// gets from index to excercise page
router.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "../public/index.html"))
})
router.get("/exercise", function(req,res){
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})
//gets what was logged in from exercise
router.get("/stats", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
})
    
module.exports = router
