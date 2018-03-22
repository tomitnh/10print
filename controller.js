/***********
 * Controller.js 
 *
 * Controls frame animation and drawing on the canvas
 */

var fps = 15; // Standard frames per second
window.setInterval(animate, 1000/fps);

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'dimgrey';
ctx.fillRect(0, 0, canvas.width, canvas.height);

var x, y, size;
x = 0;
y = 0;
size = 20;

function draw () {

	if (Math.random(1) < 0.5)
		line(x, y, x + size, y + size);
	else
		line(x, y + size, x + size, y);

	x += size;

	if (x > canvas.width) {
		x = 0;
		y += size;
	}
}

function animate () {

	// clear canvas and draw new frame
	// ctx.clearRect(0, 0, canvas.width, canvas.height);
	draw();
}

function line (x1, y1, x2, y2) {
	ctx.beginPath();
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);

	ctx.strokeStyle = 'white';
	ctx.stroke();
}

function dist (x1, y1, x2, y2) {
	// calculating distance with Pythagorean theorem
	var a = x2 - x1;
	var b = y2 - y1;
	return Math.sqrt(a*a + b*b);
}