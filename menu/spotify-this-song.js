var Spotify = require("node-spotify-api");
var keys = require("../keys")
var searchAgain = require("./searchAgain")

// Create a new spotify object from the constructor
var spotify = new Spotify(keys.spotify);

// Takes the spotify api and searches the song.
function spotifyThisSong(query) {
  if(query.length < 2) {
    console.log("No results found...");
    console.log("Searching instead for a different song...")
    spotifyThisSong("Oh Danny Boy");
  }
  else{
    console.log("Returning details about the top result... ");
    spotify.search({ type: 'track', query: query })
    .then(function(data) {
        // Provide details for the first search result
        var topResult = data.tracks.items[0]
        var displayInfo = {
          Artist : topResult.artists[0].name,
          Song : topResult.name,
          Album : topResult.album.name,
          Preview : topResult.preview_url,
        }
        console.log(JSON.stringify(displayInfo, null, 2));
        // Asks the user if they want to continue searching
        searchAgain();
    })
    .catch(function(err) {
        console.log('Error occurred: ' + err);
        // Asks the user if they want to continue searching
        searchAgain();
    });
  }
}
  module.exports = spotifyThisSong;