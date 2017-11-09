var darInfo = () => {
    let links = document.getElementsByTagName('a');
    console.log('Nº de enlaces: ' + links.length);
    console.log('.<br> Direccion del penúltimo enlace: ' + links[links.length - 2].href);
    let n_link = comprobar_link(direc);
    console.log('.<br> Nº de enlaces a Google: ' + n_link);
    let parraf = document.getElementsByTagName('p');
    let n_link_3p = comprobar_link(parraf[2]);
    console.log('.<br> Nº de enlaces del 3º párrafo: ' + n_link);
}

function comprobar_link(direc){
    let n = 0;
    for (let link in direc) {
        if (link.href === "https://www.google.es/") {
          n++
        }
    }
    return n
}


darInfo();

