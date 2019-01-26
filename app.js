const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger("dev"));

var gyaansagar = require("./gyaansagar.json");

app.get("/search/:term", (req, res) => {
  var term = req.params.term;
  var result = gyaansagar.filter(shabd => {
    if (shabd.toLowerCase().includes(term)) return shabd;
  });
  res.json(result);
});

app.listen("5000", () => {
  console.log("Listeneing at port 5000");
});
