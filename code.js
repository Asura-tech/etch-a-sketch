//These are the codes to make default 16x16 boxes.
var container = document.querySelector('.container');
for(var y = 0; y < 16; ++y) {
    for(var x = 0; x < 16; ++x) {
        container.innerHTML += '<div class ="box"></div>';
        if(x == 16) break;
    }
}

//Codes to make the container become black when mouse blackBoxs over for default boxes.
var blackBox = document.getElementsByClassName('box');
for(var i = 0; i < blackBox.length; i++) {
    blackBox[i].addEventListener('mouseover', makeBlack());
}

// var box = container.childNodes;//need to select specific or may not need this
var resetButton = document.createElement('button');
resetButton.classList.add('reset');
resetButton.textContent = 'Reset';
resetButton.addEventListener('click', makeWhite());
container.appendChild(resetButton);

var dimensionButton = document.createElement('button'); 
dimensionButton.classList.add('dimension');
dimensionButton.textContent = 'Wanna change dimension of the grid?';
dimensionButton.addEventListener('click', askUser());
container.appendChild(dimensionButton);


//below are the functions to be used.
function makeWhite() {
    return (event) => {
        for (var i = 0; i < event.length; ++i) {
            event[i].classList.add('white');
            event[i].classList.remove('black');
        }
    };
}

function makeBlack() {
    return (event) => {
        event.target.classList.add('black');
        event.target.classList.remove('white');
    };
}

function askUser() {//another bug is here; it starts when i refresh the page
    var userInput = prompt('What dimension do you want?');
    alert('You have chose ' +userInput+ 'px.');
    changeDimension(userInput);
}

function changeDimension(userRequest) {
    if(userRequest <= 960) { 
        for(var y = 0; y < userRequest; ++y) {
            for(var x = 0; x < userRequest; ++x) {
                container.innerHTML += '<div class ="userBox"></div>';
                if(x == userRequest) break;
            }
        }
    }
}

// function removeClass() {
//     for(var y = 0; y < 16; ++y) {
//         for(var x = 0; x < 16; ++x) {
//             container.innerHTML += '<div class ="nothing"></div>';
//             if(x == 16) break;
//         }
//     }
// }
