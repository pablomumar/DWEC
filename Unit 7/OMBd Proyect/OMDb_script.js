let page = 1;
let coleccion_films;

// Clases para la API ============================
// ===============================================

class Film {
    constructor(title, year, image, type, ImbdID) {
        this.title = title;
        this.year = year;
        this.image = image;
        this.type = type;
        this.ImbdID = ImbdID;

    }
}

class coleccionFilms {
    constructor() {
        this.arrayFilms = []
    }

    pushFilms(film) {
        this.arrayFilms.push(film)
    }
}

// Funciones ====================================
// ==============================================

// Creacion de clases ====================

coleccion_films = new coleccionFilms();

function crearFilms(Films) {
    for (let x = 0; x < Films.Search.length; x++) {
        coleccion_films.pushFilms(new Film(Films.Search[x].Title, Films.Search[x].Year, Films.Search[x].Poster, Films.Search[x].Type, Films.Search[x].imdbID))
    }
    maqueteo()
}


// Peticion API ===========================

function getFilms(pagina) {
    let input_content = $('input').val();
    $.ajax({
        url: "http://www.omdbapi.com/?s=" + input_content + "&apikey=a288bbcd&page=" + pagina,
        success: function (res) {
            var arrayRespuesta = res;
            crearFilms(arrayRespuesta)
        }
    })
}

//Control de contenido =====================

function clearFilms() {
    $('#contenido').empty();
    coleccion_films = new coleccionFilms();
    console.log(coleccion_films.arrayFilms)
}

function maqueteo() {
    let Films = coleccion_films.arrayFilms;
    for (let x = 0; x < Films.length; x++) {
        $('#contenido').append('<div class="pelicula col-md-3 col-sm-4">' +
            '<a href="http://www.imdb.com/title/'+Films[x].ImbdID+'">' +
            '<img id="' + Films[x].ImdbID + '" src="' + Films[x].image + '">' +
            '</a><br><p><strong>' + Films[x].title + '</strong><br></p>' +
            '<p class="type-year float-right">' + Films[x].type + ',' + Films[x].year + '</p></div>');
    }
}

function Buscar() {
    clearFilms();
    getFilms(1); //Se inicializa en 1
}

// Scroll ====================================

$(document).ready(function () {
    var win = $(window);
    win.scroll(function () {
        if ($(document).height() - win.height() == win.scrollTop()) {
            page++;
            console.log(page);
            getFilms(page);
        }
    });
});

