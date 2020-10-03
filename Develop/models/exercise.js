const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const budgetSchema =  new Schema({
    day:{
        type: Date,
        default:new Date().setDate(new Date().getDate())
    },
    exercises: Array
})

const Budget = mongoose.model("Budget", budgetSchema);
module.exports = Budget