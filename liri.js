
//------------------------Twitter------------------------------------
var input = require("./keys.js");

var twitterCode = input.twitterKeys;

var twitter = require('twitter');

var client = new twitter(twitterCode);


var commands = process.argv[2];

if (commands==="my-tweets") {


client.get('statuses/user_timeline', function(error, tweets, response) {
  if (!error) {
    console.log(error);
  }

  for (var j=0; j<20; j++){
console.log( tweets[j].created_at + "\n" + tweets[j].text+ "\n--------------------------------------------------------------")

  }
});

}







//-------------------------------OMBD MOVIE-THIS --------------------------------------------------------------------
if (commands==="movie-this") {
var request = require("request");

// Store all of the arguments in an array
var nodeArgs = process.argv;



// Create an empty variable for holding the movie name
var movieName = "";

// Loop through all the words in the node argument
// And do a little for-loop 
for (var i = 3; i < nodeArgs.length; i++) {

  if (i > 3 && i < nodeArgs.length) {

    movieName = movieName + "+" + nodeArgs[i];

  }

  else {

    movieName += nodeArgs[i];

  }
}

if (!movieName){
return console.log( "------------------------------------------------------------------"+ 
    	"\nTitle of the Movie: Mr. Nobody" + "\nRelease Year: 2009" + "\nIMDB Rating: 7.9/10" + "\nRotten Tomatos Ratings: 64%" + "\nCountry where movie was produced: Belgium, Germany, Canada, France, USA, UK" + "\nLanguage of the Movie: English, Mohawk" + "\nPlot: A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision. As long as he doesn't choose, anything is possible." + "\nActors: Jared Leto, Sarah Polley, Diane Kruger, Linh Dan Pham"  +
    	"\n------------------------------------------------------------------");
  


}

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";


request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {
console.log(body);
    
    
    console.log( "------------------------------------------------------------------"+ 
    	"\nTitle of the Movie: " + JSON.parse(body).Title + "\nRelease Year: " + JSON.parse(body).Year + "\nIMDB Rating: " + JSON.parse(body).Ratings[0].Value + "\nRotten Tomatos Ratings: " + JSON.parse(body).Ratings[1].Value + "\nCountry where movie was produced: " + JSON.parse(body).Country + "\nLanguage of the Movie: " + JSON.parse(body).Language + "\nPlot: " + JSON.parse(body).Plot + "\nActors: " + JSON.parse(body).Actors +
    	"\n------------------------------------------------------------------");
  }

});
}

//--------------------------------Spotify API-------------------------------------------------------
if (commands==="spotify-this-song") {
	spotifyNow() };


	function spotifyNow(songTitle){
		
var spotifyKey = require('node-spotify-api');

var spotify = new spotifyKey({
	id: '4cded79eed4041cfaf717f914953857f',
	secret: 'b1cf7cf3fa6f47728334a9a0607f502e'

});
var nodeArgs = process.argv;
 var songTitle = "";

for (var i = 3; i < nodeArgs.length; i++) {

  if (i > 3 && i < nodeArgs.length) {

    songTitle = songTitle + "+" + nodeArgs[i];

  }

  else {

    songTitle += nodeArgs[i];

  }
}

if (!songTitle) {


   
  	
    return console.log("---------------------------------------------------------------------------" + "\nThe Artist is: Ace of Base" + "\nThe Song is: The Sign" + "\nPreview link from Spotify: https://p.scdn.co/mp3-preview/4c463359f67dd3546db7294d236dd0ae991882ff?cid=4cded79eed4041cfaf717f914953857f" + "\nAlbum: The Sign (US Album) [Remastered]" + "\n---------------------------------------------------------------------------" );
    
  };



  spotify.search({ type: 'track', query: songTitle }, function(err, data) {
  
if (err) {
    return console.log('Error occurred: ' + err);
  }
//console.log(data.tracks.items[0]); 

	console.log("---------------------------------------------------------------------------");
	console.log("The Artist is: " + data.tracks.items[0].artists[0].name);
	console.log("The song name is: " + data.tracks.items[0].name);
    console.log("Preview link from Spotify: " + data.tracks.items[0].preview_url);
    console.log("Album: " + data.tracks.items[0].album.name);
    console.log("---------------------------------------------------------------------------");
                

});
}


// Still need to fix this code
if (commands==="do-what-it-says") {

var fs = require("fs");

fs.readFile("random.txt", "utf8", function(err, data) {
  if (err) {
    return console.log(err);
  }

  var output = data.split(",");

console.log(output[1]);
output[1] = process.argv[3];
var songTitle = output[1];
    spotifyNow(songTitle);
  
});





}


