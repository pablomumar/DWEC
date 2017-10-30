nColumn = prompt('Numero de columnas');
nAlto = prompt('Alto');
nAncho = prompt('Ancho');

function tabla(){
    document.write('<table border=”0” bgcolor=”black” width=”' + nAncho + '”>')
    document.write('<tr bgcolor="white" height="' + nAlto + '"> ')
    var n = 0;
    for ( ; n < nColumn ; n++){
        if (n % 2 === 1){
        document.write('<td width="' + nAncho + '" height="' + nAlto + '"> &nbsp; </td>')
        } else {
            document.write('<td width="' + nAncho + '" height="' + nAlto + '" bgcolor="black"> &nbsp; </td>')
        };
    }
    document.write('</tr>')
    document.write('</table>')
};

tabla()