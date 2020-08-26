//Rotates the parent circle on the x and y axis based on x y position of the mouse

var screenWidth;
var screenHeight;

init();

function init() {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
}

var maxDegrees = 45;

window.onmousemove = function(event) {
    var mouseX = event.pageX / screenWidth;
    var mouseY = event.pageY / screenHeight;
    var yDegrees = (mouseX * maxDegrees) - 0.5 * maxDegrees;
    var xDegrees = -0.5 * ((mouseY * maxDegrees) - 0.5 * maxDegrees);

    document.getElementsByClassName("mainCircle")[0].style.transform = 'rotateY(' + yDegrees + 'deg) rotateX(' + xDegrees + 'deg)';

}