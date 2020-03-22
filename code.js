var container = document.querySelector('.container');
for(var y = 0; y < 16; ++y) {
    for( var x = 0; x < 16; ++x) {
        container.innerHTML += '<div class ="box"></div>';
        if(x == 16) break;
    }
}

hover.addEventListener('mouseover', () => {
    var hover = document.querySelectorAll('.box');
    hover.classList.add('hover');
});