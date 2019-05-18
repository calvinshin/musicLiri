var axios = require("axios");
var moment = require("moment");
moment().format();
var searchAgain = require("./searchAgain")

// Uses Axios and the BandsInTown API to return details from an input.
function concertThis(input) {
    if(input.length === 0) {
        console.log("Nothing was searched...");
        console.log("Here! Let me try searching something!");
        concertThis("Robyn");
    }
    else {
        console.log("Searching " + input + " on Bands in Town...");
        axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp")
            .then(function(response) {
                var data = response.data;
                var upcoming = [];
                // Provide details for all upcoming concerts
                for(var i = 0; i < data.length; i++) {
                    var event = {
                        Venue : data[i].venue.name,
                        Location : data[i].venue.city + ", " + data[i].venue.country,
                        Date : moment(data[i].datetime).format("MM/DD/YYYY")
                    }
                    upcoming.push(event);
                }
                console.log(JSON.stringify(upcoming, null, 2));
                // Asks the user if they want to continue searching
                searchAgain();
            })
        }
}

module.exports = concertThis;