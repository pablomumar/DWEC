var bola = document.getElementById('ball');
var arriba = false;
var derecha = true;
var movimiento_bola = [2, 2];
var FPS = 60;

var update_coord = () =>{
    if (parseInt(bola.getAttribute('cx')) > 795){
        derecha = false;
        movimiento_bola = [movimiento_bola[0] * -1, movimiento_bola[1]]
    } else if (parseInt(bola.getAttribute('cx')) < 5){
        derecha = true;
        movimiento_bola = [movimiento_bola[0] * -1, movimiento_bola[1]]
    }  else if (parseInt(bola.getAttribute('cy')) > 595){
        arriba = true;
        movimiento_bola = [movimiento_bola[0], movimiento_bola[1] * -1]
    } else if (parseInt(bola.getAttribute('cy')) < 5){
        arriba = false;
        movimiento_bola = [movimiento_bola[0], movimiento_bola[1] * -1]
    }
}


var move = () => {
    update_coord();
    bola.setAttribute('cx', parseInt(bola.getAttribute('cx')) + movimiento_bola[0]);
    bola.setAttribute('cy', parseInt(bola.getAttribute('cy')) + movimiento_bola[1]);
}

function movimiento() {
    setInterval(move, 1000 / FPS)
}

