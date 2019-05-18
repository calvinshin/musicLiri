// FS would not work correctly based on the inquirer options. This will instead read the text file and call searchAgain.
var searchAgain = require("./searchAgain")
var fs = require("fs")

function random() {
    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(data);
            searchAgain();
        }
    })
    // console.log("test")
}

module.exports = random