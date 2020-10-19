function togglemenu() {
	var div = document.getElementById("menu");
	if (div.style.display === "block") {
		div.style.display = "none";
	} else {
		div.style.display = "block";
	}
}

window.addEventListener('click', function(e){
	var div = document.getElementById("menu");
	if (! (document.getElementsByTagName('nav')[0].contains(e.target)) ){
		if (div.style.display === "block") {
			div.style.display = "none";
		}
	}
});
