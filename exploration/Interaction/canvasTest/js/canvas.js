
// search document for element of 'canvas'
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// within c, passing methods and functions that allow us to draw on the canvas in 2d
var c = canvas.getContext('2d');


// draw a rectangle
// c.fillRect(x, y, width, height);


// draw a line
// c.moveTo(x, y);
// c.lineTo(x, y);
// c.stroke();


// draw a circle
// beginPath()
// arc(x, y, r, 0, 2*Math.PI);
// c.stroke();

// gradients
// createLinearGradient(x, y, x1, y1);
// createRadialGradient(x, y, r, x1, y1, r1);
// addColorStop();

// var grd=c.createRadialGradient(75,50,5,90,60,100);
// grd.addColorStop(0,"red");
// grd.addColorStop(1,"white");

// Fill with gradient
// c.fillStyle = grd;
// c.fillRect(10,10,150,80);

// c.fillRect(40, 40, 60, 60);





function drawCircle() {



	var rectWidth = 50;
	var rectHeight = 70;

	c.fillRect(30, 30, rectWidth+=50, rectHeight+=50);
}

$(window).click(function() {
	drawCircle();
});