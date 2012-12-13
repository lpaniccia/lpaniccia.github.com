var enviroment = "qa";
var episodeID = "50ca04e4564f39df7d000002";
var APIcall = "http://composer-"+enviroment+".ci.publicbroadcasting.net/api/episode/"+episodeID+"?part=all&offset=-5&api_key=special-key"

var answer = [ ];
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
 	 
 	 //Pick one of the 4 answers to be "correct"
 	 correct = answer[0][Math.floor(Math.random()*3 + 0)];
 	 
 	 //Store metadata on the correct song in global variables.
 	 correctArt = songs.playlist[correct].artworkUrl100;
 	 correctBand = songs.playlist[correct].artistName;
 	 correctSong = songs.playlist[correct].trackName;
 	 correctAlbum = songs.playlist[correct].collectionCensoredName;
 	 correctBuy = songs.playlist[correct].trackViewUrl;

 	 //Put correct song in the player.
 	 document.getElementById("player").innerHTML = '<audio controls> <source src="'+ songs.playlist[correct].previewUrl +'"" type="audio/mpeg"> </audio>';

 	 //Asign the answers to buttons on the page.
 	 document.getElementById("song1").innerHTML = songs.playlist[answer[0][0]].trackName;
 	 document.getElementById("song2").innerHTML = songs.playlist[answer[0][1]].trackName;
 	 document.getElementById("song3").innerHTML = songs.playlist[answer[0][2]].trackName;
 	 document.getElementById("song4").innerHTML = songs.playlist[answer[0][3]].trackName;

 	 //Show the buttons when DROP THE NEEDLE is clicked.
 	 document.getElementById("song1").style.visibility = "visible";
 	 document.getElementById("song2").style.visibility = "visible";
 	 document.getElementById("song3").style.visibility = "visible";
 	 document.getElementById("song4").style.visibility = "visible";

 	 });

	
}

function checkAnswer(guess) {

	if (answer[0][guess] == correct){
		document.getElementById("gameOver").innerHTML = '<h1 align="center">CORRECT</h1><br><img src="'+correctArt+'" style="padding:5px; float:left"/>'+correctBand+'<br><strong>'+correctSong+'</strong><br>'+correctAlbum+'<br><a href="'+correctBuy+'" target="_blank">Buy on iTunes';
	} else {
		document.getElementById("gameOver").innerHTML = '<h1 align="center">WRONG</h1>';
	};


}