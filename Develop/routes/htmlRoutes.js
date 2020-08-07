const path = require("path");

module.exports = function(app) {
// gets from index to excercise page
app.get("/exercise", function(req,res){
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})
//gets what was logged in from exercise
app.get("/stats", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});
};
