var imagenSelect = false;

var agarrar = () => {
    imagenSelect = true;
};

var soltar = () => {
    imagenSelect = false;
};

document.getElementById('imagen').addEventListener('mousedown', agarrar);
document.addEventListener('mouseup', soltar);
document.addEventListener('mousemove', function(ev){
    let img = document.getElementById('imagen');
    let izq = getComputedStyle(img).getPropertyValue('margin-left');
    let top = getComputedStyle(img).getPropertyValue('margin-top');
    if (imagenSelect){
        img.hspace = ev.clientX - parseInt(izq);
        img.vspace = ev.clientY - parseInt(top);
        console.log('izq: ' + izq);
        console.log('top: ' + top);
        console.log('cliX: ' + ev.clientX);
        console.log('cliY: ' + ev.clientY);
    }
});

