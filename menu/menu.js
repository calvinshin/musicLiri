var inquirer = require("inquirer")
var concertThis = require("./concert-this")
var spotifyThisSong = require("./spotify-this-song")
var movieThis = require("./movie-this")
var random = require("./do-what-it-says")

var menuChoices = ["Artist", "Song", "Movie", "Nevermind. Surprise me!"]
// The choices above are in the same order as the index of files below
var translation = ["concert-this", "spotify-this-song", "movie-this", "do-what-it-says"]

// Provides a menu with which Liri prompts the user to input details
function menuPrompt(repeat) {
    // If logic that checks if the user came from a repeat calling of the function
    if(repeat === "repeat") {
        console.log("Thanks for your continued usage.")
    }
    // When a new instance of the script is run, this message is provided.
    else{
        console.log("Welcome to the entertainment LIRI. Learn details about different spheres of entertainment!");
    }
    inquirer.prompt([
        {
            name: "searchterm",
            message: "What would you like to know more about?"
        },
        {
            name: "option",
            message: "What category is this?",
            choices: menuChoices,
            type: "list",
        },
    ]).then(function(response) {
        // Uses the menuChoices array to run unique functions
        var value = menuChoices.indexOf(response.option);
        if(value === 0) {
            concertThis(response.searchterm);
        }
        else if(value === 1) {
            spotifyThisSong(response.searchterm);
        }
        else if(value === 2) {
            movieThis(response.searchterm)
        }
        else if(value === 3) {
            random();
        }
    })
}

module.exports.menuPrompt = menuPrompt;
