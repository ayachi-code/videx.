var express = require("express");
var router = express.Router();
var fetch = require("node-fetch")


router.get("/:info", function(req, res, next) {
  fetch("https://api.themoviedb.org/3/search/movie?api_key=ac5a895c793b78f0116f0b63423fc115&language=en-US&query=" + req.params.info + "&page=1&include_adult=false")
  .then(res => res.json())
  .then((data) => { 
    let movie_info = {
        name: [],
        language: [],
        vote_average: [],
        overview: [],
        release_date: []
    }  
    

    movie_info.name.push(data.results[0].original_title)
    movie_info.language.push(data.results[0].original_language)      
    movie_info.vote_average.push(data.results[0].vote_average)      
    movie_info.overview.push(data.results[0].overview)      
    movie_info.release_date.push(data.results[0].release_date)              


    //Sent data to client...
    res.send(movie_info)
  })
});

module.exports = router;