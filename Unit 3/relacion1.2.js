function lanzamiento() {
    let tirada = Math.floor(Math.random() * (7 - 1)) + 1;
    console.log(tirada);
    return tirada;
}

lanzamiento();
