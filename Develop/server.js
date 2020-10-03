const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://kjy_24:<80NdUHQsFOSVEtog>@clusterkjy.lcvdc.mongodb.net/<kjy_24>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const re = client.db("test").re("devices");
  // perform actions on the collection object
  client.close();
});

app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
