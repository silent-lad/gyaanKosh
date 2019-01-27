const fs = require("fs");
const union = require("lodash.union");

var gyaansagar = require("./gyaansagar.json");

var visarjan = shabdKadhi => {
  shabdKadhi = shabdKadhi.trim();
  var shabdSamuh = shabdKadhi.split(",");
  for (let index = 0; index < shabdSamuh.length; index++) {
    shabdSamuh[index] = shabdSamuh[index].trim();
  }
  gyaansagar = union(shabdSamuh, gyaansagar);
  fs.writeFile(
    "./gyaansagar.json",
    JSON.stringify(gyaansagar, null, 2),
    err => {
      if (err) {
        console.log(err);
      } else {
        console.log("Write succesful");
      }
    }
  );
};
