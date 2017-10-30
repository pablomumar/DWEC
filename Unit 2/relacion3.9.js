function invertir(cad){
    var cadena = '';
    for (i= cad.length - 1; i >=0 ; i-- ){
        cadena += cad[i];
    }
    return cadena;
}


function tabla(cad){
    cadenaInvertida = invertir(cad);
    document.write('<table>');
    for (i=0; i <= cad.length - 1; i++){
        document.write('<tr>');
        for (j=0; j<= cad.length - 1; j++){
            if (i==0){
                document.write('<td>' + cad[j] + '</td>');
            }
            else if (i == cad.length - 1){
                document.write('<td>' + cadenaInvertida[j] + '</td>');
            }
            else if (j==0){
                document.write('<td>' + cad[i] + '</td>');
            }
            else if (j == cad.length - 1){
                document.write('<td>' + cadenaInvertida[i] + '</td>');
            }
            else{
                document.write('<td>&nbsp</td>');
            }
        }
    }
    document.write('</tr></table>');
}

tabla('123412341234');

