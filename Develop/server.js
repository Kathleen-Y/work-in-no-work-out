// Dependencies

const express        = require('express');
const mongoose 			 = require('mongoose');

const PORT = process.env.PORT || 3000;

// Instantiate our app
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongo workout
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/apiRoute"));
app.use(require("./routes/htmlRoute"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

module.exports = mongoose.connection
