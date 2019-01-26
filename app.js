const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

var app = express();

server.set("port", process.env.PORT || 8080);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger("dev"));

var gyaansagar = require("./gyaansagar.json");

app.get("/search/:term", (req, res) => {
  var term = req.params.term;
  var result = gyaansagar.filter(shabd => {
    if (shabd.toLowerCase().includes(term.toLowerCase())) return shabd;
  });
  res.json(result);
});

app.get("/feelinglucky", (req, res) => {
  var randomIndex = Math.floor(Math.random() * gyaansagar.length + 1);
  res.json({ "yeLijiye<3": gyaansagar[randomIndex] });
});

app.listen(app.get("port"), () => {
  console.log("Listeneing at port 5000");
});
