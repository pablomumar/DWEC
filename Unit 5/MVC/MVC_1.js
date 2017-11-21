//Modelo ---------------------------------------------------------------------

class PostIt{
    constructor(t_titulo, t_texto, marco){
        this.t_titulo = t_titulo;
        this.t_texto = t_texto;
        this.marco = marco;
        this.hora = new Date();
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






// Controlador ----------------------------------------------------------------

class controlador{
    constructor(controlador){
        this.controlador = controlador;
    }


    static crear(){
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
    let postit = new PostIt(t_titulo, t_texto, z_marco);
    mis_postit.add_pi(postit);
    z_marco.id = 'postIt' + (mis_postit.lista_postit.length - 1);
    t_titulo.id = 'TitulopostIt' + (mis_postit.lista_postit.length - 1);
    t_texto.id = 'TexTpostIt' + (mis_postit.lista_postit.length - 1);
    console.log(postit, mis_postit, postit.marco.id)
    }
}

window.onload = () => {
    controlador = new controlador();
};


document.getElementById('button').addEventListener('click', controlador.crear);