 
var colorInput = document.querySelector("#colorPicker");
var size = document.querySelector("#sizePicker");

size.addEventListener("submit", makeGrid);
function makeGrid(height, width) {
    for(let i = 1; i <= height; ++height) {
        for(let i =1; i<= width; ++width) {

        }
    }
}

var colorValue = colorInput.value;
colorInput.addEventListener("input", changeColor);
function changeColor {
    
}


/*Note: 
1/
-3 things (class sizePicker, id colorPicker (submit), and id pixelCanvas ) 
need to be stored in variables.

-the value of the color needs to be stored.

2/
-add event listeners so user can set color values and table sizes.

3/
-use loops to clear and create table based on user input.
-each cell has an event listener that sets the background color of the cell to the selected color.
*/