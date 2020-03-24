//These are the codes to make small boxes.
let boxes = document.querySelector('.boxes');
for(var y = 0; y < 16; ++y) {
    for( var x = 0; x < 16; ++x) {
        boxes.innerHTML += '<div class ="box"></div>';
        if(x == 16) break;
    }
}

//Codes to make the boxes become black when mouse hovers over.
let hover = document.getElementsByClassName('box');
for(var i = 0; i < hover.length; i++) {
    hover[i].addEventListener('mouseover', (event) => {
        event.target.style.background = 'black';
    });
}

//These are the codes to make a reset button.
//1) need to find a way to reset small boxes' color
let button = document.createElement('button');
let box = document.getElementsByClassName('box');
button.classList.add('reset');
button.textContent = 'Reset';
for( var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => box.style.background = 'white');
}
boxes.appendChild(button);
