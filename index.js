var target = document.querySelector('.target');
var links = document.querySelectorAll('.nav ul li a');
var colors = ["deepskyblue", "orange", "firebrick", "gold", "magenta", "black", "darkblue"];

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseenter', mouseenterFunc);
}

function mouseenterFunc() {
    if (!this.parentNode.classList.contains('active')) {
        for (var i = 0; i < links.length; i++) {
            if (links[i].parentNode.classList.contains('active')) {
                links[i].parentNode.classList.remove('active');
            }
            links[i].style.opacity = '0.25';
        }

        this.parentNode.classList.add('active');
        this.style.opacity = '1';

        var width = this.getBoundingClientRect().width;
        var height = this.getBoundingClientRect().height;
        var left = this.getBoundingClientRect().left + window.screenX;
        var top = this.getBoundingClientRect().top + window.screenX;
        var color = colors[Math.floor(Math.random() * colors.length)];

        target.style.width = `${width}px`;
        target.style.height = `${height}px`;
        target.style.left = `${left}px`;
        target.style.top = `${top}px`;
        target.style.borderColor = color;
        target.style.transform = 'none';
    }
}

// 视窗大小改变时
window.addEventListener('resize', resizeFunc);

function resizeFunc() {
    var active = document.querySelector('.nav ul li.active');

    var left = active.getBoundingClientRect().left + window.screenX;
    var top = active.getBoundingClientRect().top + window.screenX;

    target.style.left = `${left}px`;
    target.style.top = `${top}px`;
}