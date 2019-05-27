# musicLiri
A music-based LIRI

Demo: [MP4 Download](https://github.com/calvinshin/musicLiri/blob/master/other%20files/Demo.mp4)

## Purpose ##
The purpose of this node application is to allow the user to to search various entertainment terms and receive results back. The application makes a call to three different APIs: 
* IMDB - Used for movie searches 
* [Spotify](https://www.npmjs.com/package/node-spotify-api) - A node application to use Spotify
* BandsInTown - Used for artist searches

## Required Files ##
The following node packages need to be installed for this application to work. More exact details can be found in the package.json file:
* [Axios](https://www.npmjs.com/package/axios)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Fs](https://node.readthedocs.io/en/latest/api/fs/)
* [Inquirer](https://www.npmjs.com/package/inquirer)
* [Moment](https://www.npmjs.com/package/moment)
* [Node-spotify-api](https://www.npmjs.com/package/node-spotify-api)

## Walkthrough of app
### Start ###
![Start Code](/other%20files/Liri.png)

The start of the app is through running the liri.js file. The file does several things:
* The file uses dotenv to hide the keys used for the application. 
* The menu file is required and then launched


### Menu ###
![Menu](/other%20files/MenuCode.png)

The app then asks the user to input terms using Inquirer. This allows the user to not have prior experience with the application in order to use it.

![Menu](/other%20files/Menu.png)

After completing the prompts, the code will execute the related function, provide the details, and then call the searchAgain function. The searchAgain function calls the menu function again, enabling the user to continue using the program in a seamless experience.

