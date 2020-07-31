// Dependencies

const express        = require('express');
const mongoose 			 = require('mongoose');

const PORT = process.env.PORT || 5000;

// Instantiate our app
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});






module.exports = mongoose.connection
