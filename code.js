let container = document.querySelector('.container');
for(var y = 0; y < 16; ++y) {
    for( var x = 0; x < 16; ++x) {
        container.innerHTML += '<div class ="box"></div>';
        if(x == 16) break;
    }
}

let hover = document.getElementsByClassName('.box');
for(var i = 0; i < hover.length; i++) {
    hover[i].addEventListener('mouseover', (event) => {
        event.target.style.background = 'black';
    });
}
