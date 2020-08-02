// Dependencies
<<<<<<< HEAD
// ============
const express        = require('express');
const mongoose 			 = require('mongoose');

const PORT = process.env.PORT || 3000;
=======

const express        = require('express');
const mongoose 			 = require('mongoose');

const PORT = process.env.PORT || 5000;
>>>>>>> 9696f95fe008ae8e7374b0c677b00fe5fab873bc

// Instantiate our app
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
=======
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
>>>>>>> 9696f95fe008ae8e7374b0c677b00fe5fab873bc
  useNewUrlParser: true,
  useFindAndModify: false
});

<<<<<<< HEAD
// routes
app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


module.exports = mongoose.connection
=======





module.exports = mongoose.connection
>>>>>>> 9696f95fe008ae8e7374b0c677b00fe5fab873bc
