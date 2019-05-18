console.log("Loading...");

// Configuration required is being done on the main page.
var dotenv = require("dotenv")
dotenv.config()
var keys = require("./keys")

// All the required files for the liri file to function
var menu = require("./menu/menu")

menu.menuPrompt();