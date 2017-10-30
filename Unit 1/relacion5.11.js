nColumn = prompt('Numero de columnas');
nAlto = prompt('Alto');
nAncho = prompt('Ancho');

function tabla(){
    document.write('<table border=”0” bgcolor=”black” width=”' + nAncho + '”>')
    document.write('<tr bgcolor="white" height="' + nAlto + '"> ')
    var n = 0;
    for ( ; n < nColumn ; n++){
        document.write('<td width="' + nAncho + '" height="' + nAlto + '"> &nbsp; </td>')
    }
    document.write('</tr>')
    document.write('</table>')
};

tabla()