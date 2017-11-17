var regex_id_titulo = /^[a-zA-Z ]+^\d{9}$/;
var regex_id_texto = 'TexTpostIt' + /^\d{9}$/;

class PostIt{
    constructor(z_titulo, z_texto,t_titulo, t_texto, x, y, marco){
        this.z_titulo = z_titulo;
        this.z_texto = z_texto;
        this.t_titulo = t_titulo;
        this.t_texto = t_texto;
        this.x = x;
        this.y = y;
        this.marco = marco;
        // Falta el atributo hora para la hora de creacion
    }

    addText(event){ //evento onclick para hallar en que p estoy escribiendo
        let id_click = event.target.id;
        console.log('eee', id_click);
        if (id_click && id_click.match(regex_id_titulo)){
            this.t_titulo = document.getElementById(id_click).value;
            console.log('titulo: ' + this.t_titulo)
        } else if (id_click && id_click.match(regex_id_texto)){
            this.t_texto = document.getElementById(id_click).value;
            console.log('texto: ' + this.t_texto)
        }
    }
}

class ConjuntoPostIt{
    constructor(lista_postit = []){
        this.lista_postit = lista_postit;
    }

    add_pi(postit){
        this.lista_postit.push(postit);
    }
}

var mis_postit = new ConjuntoPostIt();

function crear(){
    let z_marco = document.createElement('div');
    let z_titulo = document.createElement('div');
    let z_texto = document.createElement('div');
    let t_titulo = document.createElement('input');
    let t_texto = document.createElement('input');
    document.body.appendChild(z_marco);
    z_marco.appendChild(z_titulo);
    z_marco.appendChild(z_texto);
    z_titulo.appendChild(t_titulo);
    z_texto.appendChild(t_texto);
    let postit = new PostIt(z_titulo, z_texto, t_titulo, t_texto, 0, 0, z_marco);
    mis_postit.add_pi(postit);
    z_marco.id = 'postIt' + (mis_postit.lista_postit.length - 1);
    t_titulo.id = 'TitulopostIt' + (mis_postit.lista_postit.length - 1);
    t_texto.id = 'TexTpostIt' + (mis_postit.lista_postit.length - 1);
    console.log(postit, mis_postit, postit.marco.id)
}

crear();
crear();

addEventListener('click', mis_postit.lista_postit[0].addText);