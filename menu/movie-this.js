var axios = require("axios");
var searchAgain = require("./searchAgain")

var axios = require("axios");
var moment = require("moment");
moment().format();
var searchAgain = require("./searchAgain")

// Uses Axios and the IMDB API to return details from an input.
function movieThis(input) {
    if(input.length < 1) {
        console.log("Nothing was searched...");
        console.log("Here! Let me try searching something!");
        movieThis("Mulan");
    }
    else{
        console.log("Searching " + input + " on IMDB...");
        axios.get("https://www.omdbapi.com/?t=" + input + "&apikey=trilogy")
        .then(function(response) {
            data = response.data
            var result = {
                Title : data.Title,
                Year : data.Year,
                "IMDB Rating" : data.imdbRating,
                Country : data.Country,
                Language : data.Language,
                Plot : data.Plot,
                Actors : data.Actors
            };
            console.log(JSON.stringify(result, null, 2));
            // Asks the user if they want to continue searching
            searchAgain();
        })
    }
}


module.exports = movieThis;