nColumn = prompt('Numero de columnas');
nFilas = prompt('Numero de filas');
nAlto = prompt('Alto');
nAncho = prompt('Ancho');

function tabla(){
    document.write('<table border=”0” bgcolor=”black” width=”' + nAncho + '”>')
    var f = 0;
    for ( ; f < nFilas ; f++){
        document.write('<tr bgcolor="white" height="' + nAlto + '"> ');
        var c = 0;
        for ( ; c < nColumn ; c++){
            document.write('<td width="' + nAncho + '" height="' + nAlto + '"> &nbsp; </td>')
        }
    }
    document.write('</tr>')
    document.write('</table>')
};

tabla()