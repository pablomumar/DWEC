var bola = document.getElementById('ball');
var rebote = false;
var movimiento_bola = [2,1];
var FPS = 60;
var eje_coord = [-400, -300];
//var alante = true;

function update_g() { // Funciones de rebote y getCoords a revisar
    if (getGrados(parseInt(bola.getAttribute('cx')) + eje_coord[0], parseInt(bola.getAttribute('cy')) + eje_coord[1]) === 0) {
        return [-2, 0];
    } else if (getGrados(parseInt(bola.getAttribute('cx')) + eje_coord[0], parseInt(bola.getAttribute('cy')) + eje_coord[1]) === Math.PI) {
        return [2, 0];
    } else if (getGrados(parseInt(bola.getAttribute('cx')) + eje_coord[0], parseInt(bola.getAttribute('cy')) + eje_coord[1]) === Math.PI/2) {
        return [0,-2];
    } else if (getGrados(parseInt(bola.getAttribute('cx')) + eje_coord[0], parseInt(bola.getAttribute('cy')) + eje_coord[1]) === 3/(2*Math.PI)) {
        return [0,2];
    } else if (parseInt(bola.getAttribute('cx')) + eje_coord[0] === 400 && (parseInt(bola.getAttribute('cy')) + eje_coord[1] === 300)) {
        return [2, 0];
    }
}

var update_coord = () =>{
    if (parseInt(bola.getAttribute('cx')) > 795){
        rebote = true;
        //alante = false;
        return update_g();
    } else if (parseInt(bola.getAttribute('cx')) < 5){
        rebote = true;
        //alante = true;
        return update_g();
    }  else if (parseInt(bola.getAttribute('cy')) > 795){
        //alante = true;
        rebote = true;
        return update_g();
    } else if (parseInt(bola.getAttribute('cx')) < 5){
        //alante = true;
        rebote = true;
        return update_g();
    }
}

function mover(){
    lista = update_coord();
    !rebote ? (
        bola.setAttribute('cx', parseInt(bola.getAttribute('cx')) + movimiento_bola[0]),
        bola.setAttribute('cy', parseInt(bola.getAttribute('cy')) + movimiento_bola[1])
        ):(
        // No hay nada en lista (problema con update_g en el return)
        console.log(lista, lista[0]),
        bola.setAttribute('cx', parseInt(bola.getAttribute('cx')) + lista[0]),
        bola.setAttribute('cy', parseInt(bola.getAttribute('cy')) + lista[1]),
        movimiento_bola = [lista[0], lista[1]],
        rebote = false);
    //alante ? bola.setAttribute('cx', (parseInt(bola.getAttribute('cx'))+1)) : bola.setAttribute('cx', (parseInt(bola.getAttribute('cx'))-1));
}


function movimiento() {
    setInterval(mover, 1000 / FPS)
}

function getGrados(x, y) {
    let h =  Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
    return Math.acos(x / h)
// Devuelve el valor del angulo en radianes
}

function getCoord(rad) {
    let coseno = Math.cos(rad);
    let h = 2; // El numero es la hipotenusa tomando como catetos 2u
    let x = coseno * h;
    let y = Math.sqrt(Math.pow(h,2) - Math.pow(x,2));
    console.log(x,y);
    return [-x, -y];
}
