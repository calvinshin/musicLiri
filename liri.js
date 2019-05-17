// All the required packages for the tool
var axios = require("axios");
var Spotify = require("node-spotify-api");
var moment = require("moment");
moment().format();
var dotenv = require("dotenv")
dotenv.config()

// All the required files for the liri file
var keys = require("./keys")

console.log(keys);
console.log("All the things above worked!")