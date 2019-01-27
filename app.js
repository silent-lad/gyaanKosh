const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

var app = express();

app.set("port", process.env.PORT || 8080);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger("dev"));

var gyaansagar = require("./gyaansagar.json");

var http = require("http");
setInterval(function() {
  http.get("http://gyaankosh.herokuapp.com/");
}, 300000); // every 5 minutes (300000)

app.get("/", (req, res) => {
  res.json({
    creator: "silentLad",
    creation: "gyaankosh",
    description:
      "Kya aap apne dost ko zaleel krne ke liye gaaliya dhundh rhe he? Aapki khoj yaha khatam hoti he ..swagat he gyaankosh main",
    HumseJudiye: "https://github.com/silent-lad/gyaanKosh"
  });
});

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
