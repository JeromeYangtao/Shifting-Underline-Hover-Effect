var target = document.querySelector('.target');
var links = document.querySelectorAll('.nav ul li a');
var colors = ["deepskyblue", "orange", "firebrick", "gold", "magenta", "black", "darkblue"];

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseenter', mouseenterFunc);
}

function mouseenterFunc() {
    for (var i = 0; i < links.length; i++) {
        if (links[i].parentNode.classList.contains('active')) {
            links[i].parentNode.classList.remove('active');
        }
        links[i].style.opacity = '0.25';
    }
    this.parentNode.classList.add('active');
    this.style.opacity = '1';
}