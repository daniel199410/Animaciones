//Centrar el contenedor en el body
var screenHeight = screen.availHeight;
var screenWidth = screen.width;
var container = document.getElementById("container");
var containerHeight = container.offsetHeight;
container.style.top = (screenHeight / 2) - (containerHeight / 2) + "px";
container.style.left = (screenWidth / 2) - (containerHeight / 2) + "px";
//Centrar el círculo azul
var circle = document.getElementById("center");       
var circleHeight = circle.offsetHeight;
var centerPosition = (containerHeight / 2) - (circleHeight / 2) + "px";
circle.style.top = centerPosition
circle.style.left = centerPosition;