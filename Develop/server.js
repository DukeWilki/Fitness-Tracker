const express = require("express");
const mongoose = require("mongoose");
// const web = require("./routes/web");
// const morgan = require("morgan");
// const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));



mongoose.connect("mongodb+srv://DukeWilki:Queenw00d.@cluster0.5etbj.mongodb.net/workout?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useFindAndModify: false
});


// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/web.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});