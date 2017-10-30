var imagenSelect = false;
var img;

function agarrar(imagen){
    img = imagen;
    imagenSelect = true;
};

var soltar = () => {
    imagenSelect = false;
};

document.addEventListener('mousemove', function(ev) {
    if (imagenSelect){
        img.hspace = ev.clientX || ev.pageX;
        img.vspace = ev.clientY || ev.pageY;
    }
}, false);
