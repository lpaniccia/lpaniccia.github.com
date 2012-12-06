function getTracks(name) {
	document.getElementById("result").innerHTML = 'Hello ' + name + '!';


	$.get("http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=loupanic&api_key=fc8ed661e26513193e2e4732f8b7ad38&format=json", function(data){
 	 console.log(data);

 	 document.getElementById("datadiv").innerHTML = data;

 	 });


}