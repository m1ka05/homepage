// preload bw personal image (quick fix for loading issue)
var bw_pic = new Image();
bw_pic.src = "images/mika-bw.jpg"

var stylesheet = document.getElementById("main-css");
var hour = new Date().getHours();
if (typeof(Storage) === "undefined" ||
  (localStorage.getItem("nightMode") !== "style.css" &&
  localStorage.getItem("nightMode") !== "style-dark.css")) {
	if (hour > 8 && hour < 18) {
		stylesheet.href = "style.css";
		localStorage.setItem("nightMode", "style.css");
	} else {
		stylesheet.href = "style-dark.css";
		localStorage.setItem("nightMode", "style-dark.css");
	}
} else {
	stylesheet.href = localStorage.getItem("nightMode");
}

function initNightMode() {
	var personalpic = document.getElementById("profile");
	if (localStorage.getItem("nightMode") == "style-dark.css")
		personalpic.src = "images/mika-bw.jpg";
}

function toggleNightMode() {
	var nightmodeicon = document.getElementById("nightmode-icon");
	var personalpic = document.getElementById("profile");

	if (localStorage.getItem("nightMode") == "style-dark.css") {
		stylesheet.href = "style.css";
		personalpic.src = "images/mika.jpg";
		localStorage.setItem("nightMode", "style.css");
	} else {
		stylesheet.href = "style-dark.css";
		personalpic.src = "images/mika-bw.jpg";
		localStorage.setItem("nightMode", "style-dark.css");
	}
}

