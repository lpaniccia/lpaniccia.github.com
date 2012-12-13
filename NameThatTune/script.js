function getTracks(name) {
	document.getElementById("result").innerHTML = 'Hello ' + name + '!';


	$.get("http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=loupanic&api_key=fc8ed661e26513193e2e4732f8b7ad38&format=json", function(data){
 	 console.log(data);

 	 var recentTracks= data;

 	 document.getElementById("datadiv1").innerHTML = '<img src="'+ recentTracks.recenttracks.track[0].image[1]["#text"] +'" style="float:left"/>' + recentTracks.recenttracks.track[0].artist["#text"] + ' <br> ' + recentTracks.recenttracks.track[0].name + '<br><br>';
 	 document.getElementById("datadiv2").innerHTML = '<img src="'+ recentTracks.recenttracks.track[1].image[1]["#text"] +'" style="float:left"/>' + recentTracks.recenttracks.track[1].artist["#text"] + ' <br> ' + recentTracks.recenttracks.track[1].name + '<br><br>';
 	 document.getElementById("datadiv3").innerHTML = '<img src="'+ recentTracks.recenttracks.track[2].image[1]["#text"] +'" style="float:left"/>' + recentTracks.recenttracks.track[2].artist["#text"] + ' <br> ' + recentTracks.recenttracks.track[2].name + '<br><br>';

 	 });


}