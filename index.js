var target = document.querySelector('.target');
var links = document.querySelectorAll('.nav ul li a');
var colors = ["deepskyblue", "orange", "firebrick", "gold", "magenta", "black", "darkblue"];

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseenter', mouseenterFunc);
}

function mouseenterFunc() {

}