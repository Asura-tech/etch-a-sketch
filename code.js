 
let color = document.getElementById("colorPicker");
let table = document.getElementById("pixelCanvas");
let sizePicker = document.getElementById("sizePicker");

//default grids
let height = document.getElementById("inputHeight").value;
let width = document.getElementById("inputWidth").value;
makeGrid(height, width);

//make the submit button doesn't refresh the page
sizePicker.addEventListener("submit", (e) => {
    e.preventDefault();
    table.firstElementChild.remove();
    let height = document.getElementById("inputHeight").value;
    let width = document.getElementById("inputWidth").value;
    makeGrid(height, width);
});

//use table methods to create grids
function makeGrid(height, width) {
    for(let y = 0; y <= height; y++) {
        let row = table.insertRow(y);
        for(let x = 0; x <= width; ++x) {
            let cell = row.insertCell(x);
            cell.addEventListener("mouseover", (e) => {
                cell.style.backgroundColor = color.value;
            });
        }
    }
}