function crear_tabla(){
    document.close();
    document.write('<table style="border: none;">');
    for (let x = 0; x < 50; x++){
        document.write('<tr onmousemove="limpiar_fila(event)">');
        for (let y = 0; y < 50; y++){
            document.write('<td style="border: 1px solid; width: 10px; height: 10px;" onmousemove="pintar(event)"></td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');
    document.write('<button type="button" onclick="limpiar_todo(event)" style="background-color: brown; border-radius: 5px;"> Limpiar tabla </button>');
}

function pintar(td){
    if (event.altKey){
        td.target.style.backgroundColor = 'blue';
    } else if (event.ctrlKey) {
        td.target.style.backgroundColor  = 'red';
    }
}

function limpiar_fila(tr){
    if (event.shiftKey){
        tr.target.style.backgroundColor = 'white';
    }
}

function limpiar_todo() {
    crear_tabla();
}