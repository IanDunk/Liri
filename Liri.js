// Core node package for reading and writing files
var fs = require("fs");
var request = require("request");

var userLiri = process.argv[2]; // ?

//Switch user commands
switch (userLiri) {
    case "movie-this":
      movieThis();
      break;
      // Instructions 
    default:
      console.log("\r\n" + "Command format: node liri.js movie-this [movie name]");
  };

// Function movieThis
function movieThis() {

    var movie = process.argv[3];
    if (!movie) {
      movie = "Up";
    }
    params = movie
  
    var movieName = "Up";
    var queryUrl = "http://www.omdbapi.com/?t=" + params + "&y=&plot=short&apikey=trilogy";
  
    request(queryUrl, function (error, response, body) {
  
      // If the request is successful
      if (!error && response.statusCode === 200) {
  
        var movieObject = JSON.parse(body);
  
        var movieResults =
          "Title: " + movieObject.Title + "\r\n" +
          "Year: " + movieObject.Year + "\r\n" +
          "Imdb Rating: " + movieObject.imdbRating + "\r\n" +
          "Rotten Tomatoes Rating: " + movieObject.Ratings[1].Value + "\r\n" +
          "Country: " + movieObject.Country + "\r\n" +
          "Language: " + movieObject.Language + "\r\n" +
          "Plot: " + movieObject.Plot + "\r\n" +
          "Actors: " + movieObject.Actors + "\r\n";
        console.log(movieResults)
      } else {
          throw error;
      }

    });
  };
