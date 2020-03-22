var container = document.querySelector('.container');

var div = document.createElement('div'); //i could use another variable to change this later
div.classList.add('.box');
for(var i = 0; i < 16; ++i) {
    for( var j = 0; j < 16; ++i) {
        // container.innerHTML += '<div class ="box"></div>';
        container.appendChild(div);
    }
    var br = document.createElement('break');
}