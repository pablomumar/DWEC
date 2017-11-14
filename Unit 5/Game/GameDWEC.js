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

    spawn(){

    }
}

class Torso{
    constructor(x, y, velocidad){
        this.x_torso = x;
        this.y_torso = y;
        this.velocidad = velocidad;
    }

    comer(){}

    movimiento(){}

    gameOver(){}
}

class Serpiente{
    constructor(lista_torsos){
        this.lista_torsos = lista_torsos;
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