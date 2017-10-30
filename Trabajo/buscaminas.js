var lista_casillas = [];
var lista_posiciones = [];

// ---------------------------------------------------------------------------------------------------------------------------
// CLASE
// ---------------------------------------------------------------------------------------------------------------------------

class casilla {
    constructor(mina, numero, near, activo, x, y) {
        this.mina = mina;
        this.numero = numero;
        this.near = near;
        this.activo = activo;
        this.x = x;
        this.y = y;
    }

// ---------------------------------------------------------------------------------------------------------------------------
// METODOS
// ---------------------------------------------------------------------------------------------------------------------------


    static obtener_pos() {
        let posicion = Math.floor(Math.random() * (64 - 1)) + 1;
        posicion = posicion - 1;
        return posicion;
    }

    static comprobar_pos() {
        let posi = casilla.obtener_pos();
        for (let x = 0; x < lista_posiciones.length; x++){
            if (lista_posiciones[x] === posi) {
                posi = casilla.obtener_pos();
            }
        }
        console.log('compr: ' + posi);
        lista_posiciones.push(posi);
        return lista_posiciones;
    }

    static distribuir_minas(n_minas) {
        let posicion = casilla.obtener_pos();
        lista_posiciones.push(posicion);
        for (let c_mina = 0; c_mina < (n_minas - 1); c_mina++) {
            casilla.comprobar_pos();
        }
        console.log('Posiciones: ' + lista_posiciones);
        return lista_posiciones;
    }

// ---------------------------------------------------------------------------------------------------------------------------

    static generar_campo() {
        for (let cas_x = 0; cas_x < 8; cas_x++) {
            for (let cas_y = 0; cas_y < 8; cas_y++) {
                lista_casillas.push(new casilla(false, 0, 0, true, cas_x, cas_y));
            }
        }
        for (let pos_mina of lista_posiciones) {
            lista_casillas[pos_mina].mina = true;
            lista_casillas[pos_mina].numero = 1;
            lista_casillas[pos_mina].near = false;
        }
        return lista_casillas;
        // Funciona
    }

// ---------------------------------------------------------------------------------------------------------------------------

    static trad_coor(coor){
        let num;
        let coordenadas = { 0 : [0, 0], 1 : [0,1],2 : [0, 2], 3 : [0,3],4 : [0, 4], 5 : [0,5],6 : [0, 6], 7 : [0,7],
            8 : [1, 0], 9 : [1,1],10 : [1, 2],  11 : [1,3], 12 : [1,4], 13 : [1,5], 14 : [1,6], 15 : [1,7],
            16 : [2,0], 17 : [2,1], 18 : [2,2], 19 : [2,3], 20 : [2,4], 21 : [2,5], 22 : [2,6], 23 : [2,7],
            24 : [3,0], 25 : [3,1], 26 : [3,2], 27 : [3,3], 28 : [3,4], 29 : [3,5], 30 : [3,6], 31 : [3,7],
            32 : [4,0], 33 : [4,1], 34 : [4,2], 35 : [4,3], 36 : [4,4], 37 : [4,5], 38 : [4,6], 39 : [4,7],
            40 : [5,0], 41 : [5,1], 42 : [5,2], 43 : [5,3], 44 : [5,4], 45 : [5,5], 46 : [5,6], 47 : [5,7],
            48 : [6,0], 49 : [6,1], 50 : [6,2], 51 : [6,3], 52 : [6,4], 53 : [6,5], 54 : [6,6], 55 : [6,7],
            56 : [7,0], 57 : [7,1], 58 : [7,2], 59 : [7,3], 60 : [7,4], 61 : [7,5], 62 : [7,6], 63 : [7,7]};
        for (let n = 0; n < 63; n++) {
            let coords = coordenadas[n];
            if (coor[0] === coords[0] && coor[1] === coords[1]) {
                num = n
            }
        }
        return num;
    }

// ---------------------------------------------------------------------------------------------------------------------------
    static c_up(x, y){
        return casilla.trad_coor([x, y - 1]);
    }

    static c_upright(x, y){
        return casilla.trad_coor([x + 1, y - 1]);
    }

    static c_upleft(x, y){
        return casilla.trad_coor([x - 1, y - 1]);
    }

    static c_left(x, y){
        return casilla.trad_coor([x - 1, y]);
    }

    static c_right(x, y){
        return casilla.trad_coor([x + 1, y]);
    }

    static c_down(x, y){
        return casilla.trad_coor([x, y + 1]);
    }

    static c_downright(x, y){
        return casilla.trad_coor([x + 1, y + 1]);
    }

    static c_downleft(x, y){
        return casilla.trad_coor([x - 1, y + 1]);
    }

// ---------------------------------------------------------------------------------------------------------------------------
    static minas_prox() {
        for (let pos_mina of lista_posiciones) {
            let coor = [lista_casillas[pos_mina].x, lista_casillas[pos_mina].y];
            console.log('En casilla: ' + casilla.trad_coor(coor));

            // Esquinas (z1 - z4)
            //z1
            if (coor[0] === 0 && coor[1] === 0){
                if (lista_casillas[1].near === false){} else {
                    lista_casillas[1].near += 1;}
                if (lista_casillas[8].near === false){} else {
                    lista_casillas[8].near += 1;}
                if (lista_casillas[9].near === false){} else {
                    lista_casillas[9].near += 1;}
            }

            //z2
            else if (coor[0] === 7 && coor[1] === 0){
                if (lista_casillas[48].near === false){} else {
                    lista_casillas[48].near += 1;}
                if (lista_casillas[49].near === false){} else {
                    lista_casillas[49].near += 1;}
                if (lista_casillas[57].near === false){} else {
                    lista_casillas[57].near += 1;}
            }

            //z3
            else if (coor[0] === 0 && coor[1] === 7){
                if (lista_casillas[6].near === false){} else {
                    lista_casillas[6].near += 1;}
                if (lista_casillas[14].near === false){} else {
                    lista_casillas[14].near += 1;}
                if (lista_casillas[15].near === false){} else {
                    lista_casillas[15].near += 1;}
            }

            //z4
            else if (coor[0] === 7 && coor[1] === 7){
                if (lista_casillas[54].near === false){} else {
                    lista_casillas[54].near += 1;}
                if (lista_casillas[55].near === false){} else {
                    lista_casillas[55].near += 1;}
                if (lista_casillas[62].near === false){} else {
                    lista_casillas[62].near += 1;}
            }

            //Laterales (z5 - z8)
            //z5
            else if (coor[0] === 0 && coor[1] > 0 && coor[1] < 7) {
                if (lista_casillas[casilla.c_up(coor[0], coor[1])].near === false){} else { //(0, -1)
                    lista_casillas[casilla.c_up(coor[0], coor[1])].near += 1;}
                if (lista_casillas[casilla.c_down(coor[0], coor[1])].near === false){} else { //(0, +1)
                    lista_casillas[casilla.c_down(coor[0], coor[1])].near += 1;}
                if (lista_casillas[casilla.c_downright(coor[0], coor[1])].near === false){} else { //(+1, +1)
                    lista_casillas[casilla.c_downright(coor[0], coor[1])].near += 1;}
                if (lista_casillas[casilla.c_right(coor[0], coor[1])].near === false){} else { //(+1, 0)
                    lista_casillas[casilla.c_right(coor[0], coor[1])].near += 1;}
                if (lista_casillas[casilla.c_upright(coor[0], coor[1])].near === false){} else { //(+1, -1)
                    lista_casillas[casilla.c_upright(coor[0], coor[1])].near += 1;}
            }

            //z6
            else if (coor[0] > 0 && coor[0] < 7 && coor[1] === 0) {
                if (lista_casillas[casilla.c_right(coor[0], coor[1])].near === false){} else { //(+1, 0)
                    lista_casillas[casilla.c_right(coor[0], coor[1])].near += 1;}
                if (lista_casillas[casilla.c_left(coor[0], coor[1])].near === false){} else { //(-1, 0)
                    lista_casillas[casilla.c_left(coor[0], coor[1])].near += 1;}
                if (lista_casillas[casilla.c_downleft(coor[0], coor[1])].near === false){} else { //(-1, +1)
                    lista_casillas[casilla.c_downleft(coor[0], coor[1])].near += 1;}
                if (lista_casillas[casilla.c_down(coor[0], coor[1])].near === false){} else { //(0, +1)
                    lista_casillas[casilla.c_down(coor[0], coor[1])].near += 1;}
                if (lista_casillas[casilla.c_downright(coor[0], coor[1])].near === false){} else { //(+1, +1)
                    lista_casillas[casilla.c_downright(coor[0], coor[1])].near += 1;}
            }

            //z7
            else if (coor[0] === 7 && coor[1] > 0 && coor[1] < 7) {
                if (lista_casillas[casilla.c_up(coor[0], coor[1])].near === false){} else { //(0, -1)
                    lista_casillas[casilla.c_up(coor[0], coor[1])].near += 1;}
                if (lista_casillas[casilla.c_down(coor[0], coor[1])].near === false){} else { //(0, +1)
                    lista_casillas[casilla.c_down(coor[0], coor[1])].near += 1;}
                if (lista_casillas[casilla.c_downleft(coor[0], coor[1])].near === false){} else { //(-1, +1)
                    lista_casillas[casilla.c_downleft(coor[0], coor[1])].near += 1;}
                if (lista_casillas[casilla.c_left(coor[0], coor[1])].near === false){} else { //(-1, 0)
                    lista_casillas[casilla.c_left(coor[0], coor[1])].near += 1;}
                if (lista_casillas[casilla.c_upleft(coor[0], coor[1])].near === false){} else { //(-1, -1)
                    lista_casillas[casilla.c_upleft(coor[0], coor[1])].near += 1;}
            }

            //z8
            else if (coor[0] > 0 && coor[0] < 7 && coor[1] === 7) {
                if (lista_casillas[casilla.c_left(coor[0], coor[1])].near === false){} else { //(-1, 0)
                    lista_casillas[casilla.c_left(coor[0], coor[1])].near += 1;}
                if (lista_casillas[casilla.c_right(coor[0], coor[1])].near === false){} else { //(+1, 0)
                    lista_casillas[casilla.c_right(coor[0], coor[1])].near += 1;}
                if (lista_casillas[casilla.c_upleft(coor[0], coor[1])].near === false){} else { //(-1, -1)
                    lista_casillas[casilla.c_upleft(coor[0], coor[1])].near += 1;}
                if (lista_casillas[casilla.c_up(coor[0], coor[1])].near === false){} else { //(0, -1)
                    lista_casillas[casilla.c_up(coor[0], coor[1])].near += 1;}
                if (lista_casillas[casilla.c_upright(coor[0], coor[1])].near === false){} else { //(+1, -1)
                    lista_casillas[casilla.c_upright(coor[0], coor[1])].near += 1;}
            }

            // Centro (z9)
            else if (coor[0] > 0 && coor[0] < 7 && coor[1] > 0 && coor[1] < 7){
                if (lista_casillas[casilla.c_upleft(coor[0], coor[1])].near === false){} else { //(-1, -1)
                    lista_casillas[casilla.c_upleft(coor[0], coor[1])].near += 1;}
                if (lista_casillas[casilla.c_up(coor[0], coor[1])].near === false){} else { //(0, -1)
                    lista_casillas[casilla.c_up(coor[0], coor[1])].near += 1;}
                if (lista_casillas[casilla.c_upright(coor[0], coor[1])].near === false){} else { //(+1, -1)
                    lista_casillas[casilla.c_upright(coor[0], coor[1])].near += 1;}
                if (lista_casillas[casilla.c_left(coor[0], coor[1])].near === false){} else { //(-1, 0)
                    lista_casillas[casilla.c_left(coor[0], coor[1])].near += 1;}
                if (lista_casillas[casilla.c_right(coor[0], coor[1])].near === false){} else { //(+1, 0)
                    lista_casillas[casilla.c_right(coor[0], coor[1])].near += 1;}
                if (lista_casillas[casilla.c_downleft(coor[0], coor[1])].near === false){} else { //(-1, +1)
                    lista_casillas[casilla.c_downleft(coor[0], coor[1])].near += 1;}
                if (lista_casillas[casilla.c_down(coor[0], coor[1])].near === false){} else { //(0, +1)
                    lista_casillas[casilla.c_down(coor[0], coor[1])].near += 1;}
                if (lista_casillas[casilla.c_downright(coor[0], coor[1])].near === false){} else { //(+1, +1)
                    lista_casillas[casilla.c_downright(coor[0], coor[1])].near += 1;}
            }
        }
    }
}

casilla.distribuir_minas(10);
casilla.generar_campo();
console.log(lista_casillas);
casilla.minas_prox();
for (let x = 0; x < 63; x++){
    console.log('casilla: ' + x + ' es ' + lista_casillas[x].near)
}
function represent() {
    document.write('<table style="border: 1px solid">');
    let num = 63;
    for (let c = 0; c < 8; c++){
        document.write('<tr>');
        num = (num - 64) + 1;
        for (i=0; i < 8; i++){
            document.write('<td style="border: 1px dotted; ">' + lista_casillas[num].near + '</td>');
            num = num + 8;
        }
        document.write('</tr>')
    }
    document.write('</table>')
}
represent();