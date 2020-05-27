var express = require("express");
var router = express.Router();
var fetch = require("node-fetch")



router.get("/:movie", function(req, res, next) {
  fetch("https://api.themoviedb.org/3/search/movie?api_key=ac5a895c793b78f0116f0b63423fc115&language=en-US&query=" + req.params + "&page=1&include_adult=false")
  .then(res => res.json())
  .then((data) => {
    console.log(data)
  })
});

module.exports = router;