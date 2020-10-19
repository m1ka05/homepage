var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
	var div = document.getElementById("menu");
	var currentScrollPos = window.pageYOffset;

	if (prevScrollpos > currentScrollPos || currentScrollPos == 0) {
		document.getElementsByTagName('header')[0].style.top = "-1px";
		div.style.top = "0"
	} else {
		document.getElementsByTagName('header')[0].style.top = "-4em";
		div.style.display = "none"
	}
	prevScrollpos = currentScrollPos;
}
