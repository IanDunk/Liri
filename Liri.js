// Core node package for reading and writing files
var request = require("request");

// Grabbing the third word passed into the terminal
var userLiri = process.argv[2];

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

  // Grabbing the fourth word passed into the terminal
  var movie = process.argv[3];
  
  if (!movie) {
    movie = "Up";
  }

  var movieName = "Up";
  var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

  request(queryUrl, function (error, response, body) {

    // If the request is successful
    if (!error && response.statusCode === 200) {

      // Getting movie data and converting it to JSON format
      var movieObject = JSON.parse(body);

      var movieResults =
        "\r\n" +
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
