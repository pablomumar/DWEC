function crear_tabla(){
    document.write('<table style="border: none;">');
    for (let x = 0; x < 50; x++){
        document.write('<tr>');
        for (let y = 0; y < 50; y++){
            document.write('<td style="border: 1px solid; width: 10px; height: 10px;" onmousemove="pintar(event)"></td>');
        }
        document.write('</tr>');
    }
    document.write('</table>')
}

function pintar(td){
    if (event.altKey){
        td.target.style.backgroundColor = 'blue';
    } else if (event.ctrlKey) {
        td.target.style.backgroundColor  = 'red';
    }
}
