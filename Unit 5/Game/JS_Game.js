var bola = document.getElementById('ball');
var alante = true;

var update = () =>{
    if (parseInt(bola.getAttribute('cx')) > 1300){
        alante = false;
    } else if (parseInt(bola.getAttribute('cx')) < 10){
        alante = true;
    }
}

var mover = () => {
    console.log(alante);
    update();
    alante ? bola.setAttribute('cx', (parseInt(bola.getAttribute('cx'))+1)) : bola.setAttribute('cx', (parseInt(bola.getAttribute('cx'))-1));
}


function movimiento() {
    setInterval(mover, 10)
}



