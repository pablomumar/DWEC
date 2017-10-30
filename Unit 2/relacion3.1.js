invierteCadena = function (cad_arg) {
    var letras = cad_arg.split('');
    var letras_inv = [];
    for(x = letras.length ; x > -1 ; x--){
        letras_inv.push(letras[x]);
        var cad_arg_inv = letras_inv.join('');
    }
    console.log(cad_arg_inv);
    return cad_arg_inv;
};

// invierteCadena('ola k ase, me invierte o k ase');

/* -------------------------------------------------------------- */

inviertePalabras = function (cad_arg) {
    var palabras = cad_arg.split(' ');
    var palabras2 = [];
    for (n = palabras.length; n > -1 ; n--){
        palabras2.push(palabras[n]);
        var cad_text_inv = palabras2.join(' ');
    }
    console.log(cad_text_inv);
    return cad_text_inv;
};

// inviertePalabras('esto es una fking prueba');

/* ---------------------------------------------------------------- */

function encuentraPalabraMasLarga(car_arg){
    var array = car_arg.split(' ');
    cadenalarga = '';
    for(i of array){
        if(i.length >= cadenalarga.length){
            cadenalarga = i;
        }
    }
    console.log(cadenalarga);
    return cadenalarga;
};

// encuentraPalabraMasLarga('esto es una pruebaaaaa');

/* ---------------------------------------------------------------- */

function filtraPalabrasMasLargas(car_arg,x){
    var array = car_arg.split(' ');
    c = 0;
    for(i of array) if(i.length > x) c++;
    console.log(c);
    return c;
}

/* aclaracion para navegantes: lo que hace es filtrar el NUMERO de palabras mayores a x */

// filtraPalabrasMasLargas('esto es otra pruebaaaaaaa asdf asdf', 3);

/* ---------------------------------------------------------------- */

function cadenaBienFormada(cad_arg){
    cad_bien = cad_arg[0].toUpperCase();
    for(i = 1; i < cad_arg.length; i++){
        cad_bien += cad_arg[i].toLowerCase();
    }
    console.log(cad_bien);
    return cad_bien;
}
cadenaBienFormada('eSTO SiRVe de PrUeBA');

