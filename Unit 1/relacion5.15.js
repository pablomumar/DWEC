var nColumn = prompt('Numero de columnas');
var nAlto = prompt('Alto');
var nAncho = prompt('Ancho');

function tabla(){
    document.write('<table border=”0” bgcolor=”black” width=”' + nAncho + '”>')
    document.write('<tr bgcolor="white" height="' + nAlto + '"> ')
    var n = 0;
    while (n < nColumn){
        if (n % 2 === 1){
            document.write('<td width="' + nAncho + '" height="' + nAlto + '"> &nbsp; </td>');
            n++;
        } else {
            document.write('<td width="' + nAncho + '" height="' + nAlto + '" bgcolor="black"> &nbsp; </td>')
            n++;
        };
    }
    document.write('</tr>')
    document.write('</table>')
};

tabla()