const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const trackerSchema =  new Schema({
    day:{
        type: Date,
        default:new Date().setDate(new Date().getDate())
    },
    exercises: Array
})

const Tracker = mongoose.model("Tracker", trackerSchema);
module.exports = Tracker