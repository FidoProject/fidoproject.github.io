(function() {
	smoothScroll.init();
	setNames();
})();

function setNames() {
	var joshLink = '<a href="https://github.com/joshuagruenstein/">Joshua Gruenstein</a>';
	var michaelLink = '<a href="https://github.com/truell20/">Michael Truell</a>';

	var random = Math.random() >= 0.5;

	document.getElementById("nameOne").innerHTML = random ? joshLink : michaelLink;
	document.getElementById("nameTwo").innerHTML = random ? michaelLink : joshLink;
}
