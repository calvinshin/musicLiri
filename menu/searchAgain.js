var inquirer = require("inquirer");
var menu = require("./menu")

// A prompt for the user to see if they would like to repeat the search
function searchAgain() {
    inquirer.prompt([ {
        name : "again",
        message : "Do you want to search again?",
        choices: ["Yes", "No"],
        type: "list",
    }])
    .then(function(response) {
        if(response.again === "Yes") {
            menu.menuPrompt("repeat");
        }
        else{
            console.log("Come again soon! Bye!")
        }
    })
}

module.exports = searchAgain;