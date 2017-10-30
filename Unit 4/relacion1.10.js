var imagenSelect = false;
var img;

function agarrar(imagen, ev){
    img = imagen;
    imagenSelect = !imagenSelect;
    offsetX = ev.offsetX;
    offsetY = ev.offsetY;
    // offset toma la distancia (x e y) respecto al elemnto donde surge el evento
};

    document.getElementById('imagen').addEventListener('click', agarrar);
    document.addEventListener('mousemove', function(ev){
        let img = document.getElementById('imagen');
        if (imagenSelect){
            img.style.left = (ev.clientX - offsetX) + "px";
            img.style.top = (ev.clientY - offsetY) + "px";
        }
    });
