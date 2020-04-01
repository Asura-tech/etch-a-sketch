var container = document.querySelector('.container');
//default grids

startMakingGrids();

//Codes to make the container become black when mouse blackBoxs over for default boxes.
var coloredBox = document.querySelectorAll('.box');
for(var i = 0; i < coloredBox.length; i++) {
    coloredBox[i].addEventListener('mouseover', makeBlack());
}

var resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', resetGrids);

var dimensionButton = document.querySelector('.dimension'); 
dimensionButton.addEventListener('click', askUser);

//below are the functions to be used.
function resetGrids() {
    removeChildren(container, coloredBox);
    startMakingGrids();
}

function removeChildren(node, array) {
    array.forEach(element => node.removeChild(element));
}

function makeBlack() {
    return (event) => {
        event.target.classList.add('black');
        event.target.classList.remove('white');
    };
}

function askUser() {//another bug is here; it starts when i refresh the page
    let userInput = prompt('What dimension do you want?');
    alert('You have chose ' +userInput+ 'px * ' +userInput+ 'px.');
    startMakingGrids(userInput);
}

function startMakingGrids(grids = 16) {
    makeGrids(grids);
}

//default is 16
function makeGrids(grids) {
        for(var y = 1; y <= grids; ++y) {
            for(var x = 1; x <= grids; ++x) {
                container.innerHTML += '<div class ="box"></div>';
            }
        }
    }
