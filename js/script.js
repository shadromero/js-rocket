var colorChange = function () {
	var currentClassName = document.getElementById('colorChange').className;

	if (currentClassName == 'cool') {
		document.getElementById('color').className = 'cool change';
	} else {
		document.getElementById('color').className = 'cool';
	}

var clickMe = function (error) {
	alert(''+error);
}