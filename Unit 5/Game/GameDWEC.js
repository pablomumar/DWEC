var svg = "http://www.w3.org/2000/svg";

class Partida{
    constructor(){

    }

    setNGame(){}

    setTablero(){}
}

class Comida{
    constructor(x, y){
        this.x_comida = x;
        this.y_comida = y;
    }

    getPos(){
        this.x_comida = parseInt(document.getElementById('comida').getAttribute('cx'));
        this.y_comida = parseInt(document.getElementById('comida').getAttribute('cy'));
        console.log(this.x_comida, this.y_comida);
        return [this.x_comida, this.y_comida];
    }

    spawn(){
        let posicion = [Math.floor(Math.random() * (750 - 50)) + 50, Math.floor(Math.random() * (550 - 50)) + 50];
        console.log(posicion);
        document.getElementById('comida').setAttribute('cx', posicion[0]);
        document.getElementById('comida').setAttribute('cy', posicion[1]);
        this.getPos();
    }
}

class Torso{
    constructor(x, y, velocidad){
        this.x_torso = x;
        this.y_torso = y;
        this.velocidad = velocidad;
        this.up=false;
        this.down=false;
        this.left=false;
        this.right=true;
    }

    showStats(){
        console.log(this.x_torso, this.y_torso)
    }

    comer(){

    }

    movimiento(){}

    gameOver(){}
}

class Serpiente{
    constructor(lista_torsos){
        this.lista_torsos = lista_torsos;
    }

    anadirListaT(){

    }

    checkPos(){}
}

class HUD{
    constructor(contador){
        this.contador = contador;
    }

    setPuntuacion(){}

    contar(){}

    showPuntuacion(){}
}

function generaTorso(lista_serp){
    let canvas = document.getElementById('mySVG');
    let newTorso = document.createElementNS(svg, 'rect');
    canvas.appendChild(newTorso);
    newTorso.id = 'torso' + (lista_serp.length - 1);
    newTorso.setAttributeNS(null, 'height', 10);
    newTorso.setAttributeNS(null, 'width', 10);
    newTorso.setAttributeNS(null, 'fill', 'black');
    console.log('serpiente antes: ' + lista_serp.length);
    (lista_serp.length <= 1) ? (
        newTorso.setAttributeNS(null, 'x', 400),
        newTorso.setAttributeNS(null, 'y', 300),
        newTorso = new Torso(400, 300, 2),
        lista_serp.push(newTorso)
    ) : (
        x_t = lista_serp[(lista_serp.length -1)].x_torso,
        y_t = lista_serp[(lista_serp.length -1)].y_torso,
        newTorso.setAttributeNS(null, 'x', x_t),
        newTorso.setAttributeNS(null, 'y', y_t),
        newTorso = new Torso(lista_serp[(lista_serp.length -1)].x_torso, lista_serp[(lista_serp.length -1)].y_torso, 2),
        lista_serp.push(newTorso)
    );

    console.log('esta es la serpiente ahora: ' + lista_serp + newTorso.id)
}

let Snake = new Serpiente(lista_torsos = []);
generaTorso(Snake.lista_torsos);
let comida = new Comida(0,0);
comida.spawn();