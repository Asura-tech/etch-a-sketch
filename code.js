//These are the codes to make small boxes
let boxes = document.querySelector('.boxes');
for(var y = 0; y < 16; ++y) {
    for( var x = 0; x < 16; ++x) {
        boxes.innerHTML += '<div class ="box"></div>';
        if(x == 16) break;
    }
}
let hover = document.getElementsByClassName('box');
for(var i = 0; i < hover.length; i++) {
    hover[i].addEventListener('mouseover', (event) => {
        event.target.style.background = 'black';
    });
}

//These are the codes to make a reset button
//1) need to find a way to reset small boxes' color
//2) need to find a way to make the reset button on top
let container = document.querySelector('.container');
let button = document.createElement('button');
button.classList.add('reset');
button.textContent = 'Reset';
button.addEventListener('click', () => window.location.reload());
container.appendChild(button);
