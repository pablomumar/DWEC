var lista_gatetes = document.getElementsByTagName('img');
var lista_cont = [];

var crear_parrafos = () => {
    for (x = 0; x < lista_gatetes.length; x++){
        newp = document.createElement('p');
        newp.id = 'parrafo' + (x +1);
        marco = document.getElementsByTagName('div');
        marco[0].appendChild(newp);
    }
}

var lista_p = document.getElementsByTagName('p');

var crear_cont = () => {
    for (n = 0; n < lista_gatetes.length; n++){
        lista_cont.push(0);
    }
}

function contar(event) {
    id_img = event.target.id;
    for (i = 0; i < lista_gatetes.length; i++) {
        if (lista_gatetes[i].id === id_img){
           var cont_fin = i;
        }
    }
    console.log(lista_p, cont_fin);
    lista_p[cont_fin].textContent = ++lista_cont[cont_fin] + ' Clicks en ' + id_img;
}

addEventListener('load', crear_parrafos);
addEventListener('load', crear_cont);