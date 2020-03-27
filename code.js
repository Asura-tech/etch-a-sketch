//These are the codes to make default 16x16 boxes.
var container = document.querySelector('.container');
for(var y = 0; y < 16; ++y) {
    for(var x = 0; x < 16; ++x) {
        container.innerHTML += '<div class ="box"></div>';
        if(x == 16) break;
    }
}

//Codes to make the container become black when mouse hovers over for default boxes.
var hover = document.getElementsByClassName('box');
for(var i = 0; i < hover.length; i++) {
    hover[i].addEventListener('mouseover', makeBlack());
}

var box = container.childNodes;
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
    return () => {
        for (var i = 0; i < box.length; ++i) {
            box[i].classList.add('white');
            box[i].classList.remove('black');
        }
    };
}

function makeBlack() {
    return (event) => {
        event.target.classList.add('black');
        event.target.classList.remove('white');
    };
}

function askUser() {
    var userInput = prompt('What dimension do you want?');
    alert('You have chose ' +userInput+ 'px.');
    changeDimension(userInput);
}

function changeDimension(userRequest) {
    removeChildren(container, box); // bug is here from the function removechildren
    if(userRequest <= 960) { 
        for(var y = 0; y < userRequest; ++y) {
            for(var x = 0; x < userRequest; ++x) {
                container.innerHTML += '<div class ="userBox"></div>';
                if(x == userRequest) break;
            }
        }
    }
};

function removeChildren(node, array) {
    array.forEach(element => node.classList.removeChild(element)); //bug is here
};
