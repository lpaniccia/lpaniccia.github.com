//API settings
var enviroment = "qa";
var episodeID = "50ca04e4564f39df7d000002";
var APIcall = "http://composer-"+enviroment+".ci.publicbroadcasting.net/api/episode/"+episodeID+"?part=all&offset=-5&api_key=special-key"

//Declaring song array
var answer = [ ];

//Score keeping variables
var attempt = 0;
var rightans = 0;

//Metadata on the correct song
//TODO: This would probably work better as an array.
var correct;
var correctArt;
var correctBand;
var correctSong;
var correctAlbum;
var correctBuy;

function getTracks() {
	$.get(APIcall, function(data){
 	 console.log(data);
 	 var songs = data;
 	 var playlistLength = songs.playlist.length - 1;

 	 //clear old game results.
	 document.getElementById("gameOver").innerHTML = ''; 	 

 	 // Pick 4 songs at random from the playlist
 	 //TODO: Prevent the same answer from being displayed twice.
 	 answer.push([Math.floor(Math.random()*playlistLength + 0),Math.floor(Math.random()*playlistLength + 0),Math.floor(Math.random()*playlistLength + 0),Math.floor(Math.random()*playlistLength + 0)]);
 	 
 	 //Show artist or song
 	 var cointoss = Math.floor(Math.random()*2 + 1)

 	 //Pick one of the 4 answers to be "correct"
 	 correct = answer[attempt][Math.floor(Math.random()*3 + 0)];
 	 
 	 //Store metadata on the correct song in global variables.
 	 correctArt = songs.playlist[correct].artworkUrl100;
 	 correctBand = songs.playlist[correct].artistName;
 	 correctSong = songs.playlist[correct].trackName;
 	 correctAlbum = songs.playlist[correct].collectionCensoredName;
 	 correctBuy = songs.playlist[correct].trackViewUrl;

 	 //Put correct song in the player.
 	 document.getElementById("player").innerHTML = '<audio controls autoplay="autoplay"> <source src="'+ songs.playlist[correct].previewUrl +'"" type="audio/mpeg"> </audio>';

 	 //Asign the answers to buttons on the page based on the cointoss.

 	 if (cointoss == 1){
 	 	document.getElementById("song1").innerHTML = songs.playlist[answer[attempt][0]].trackName;
 	 	document.getElementById("song2").innerHTML = songs.playlist[answer[attempt][1]].trackName;
 	 	document.getElementById("song3").innerHTML = songs.playlist[answer[attempt][2]].trackName;
 	 	document.getElementById("song4").innerHTML = songs.playlist[answer[attempt][3]].trackName;
 	 } else {
 	 	document.getElementById("song1").innerHTML = songs.playlist[answer[attempt][0]].artistName;
 	 	document.getElementById("song2").innerHTML = songs.playlist[answer[attempt][1]].artistName;
 	 	document.getElementById("song3").innerHTML = songs.playlist[answer[attempt][2]].artistName;
 	 	document.getElementById("song4").innerHTML = songs.playlist[answer[attempt][3]].artistName;
 	 };

 	 //Show the buttons when DROP THE NEEDLE is clicked.
 	 document.getElementById("song1").style.visibility = "visible";
 	 document.getElementById("song2").style.visibility = "visible";
 	 document.getElementById("song3").style.visibility = "visible";
 	 document.getElementById("song4").style.visibility = "visible";

 	 });

	
}

function checkAnswer(guess) {

	if (answer[attempt][guess] == correct){
		document.getElementById("gameOver").innerHTML = '<h1 align="center">CORRECT</h1><img src="'+correctArt+'" style="padding:0px 10px 5px 30%; float:left"/>'+correctBand+'<br><strong>'+correctSong+'</strong><br>'+correctAlbum+'<br><a href="'+correctBuy+'" target="_blank">Buy on iTunes';
		attempt ++;
		rightans ++;
		document.getElementById("score").innerHTML = 'Score: '+rightans;
	} else {
		document.getElementById("gameOver").innerHTML = '<h1 align="center">WRONG</h1>';
		rightans --;
	};


}