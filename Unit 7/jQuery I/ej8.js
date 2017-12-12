var textsize = 24;

function createNew(n){
    let newNew = $('<h2> Fake New </h2>')
        .addClass('contenido' + n);
    let newPNew = $('<p> Example </p>')
        .addClass('contenido' + n);
    $('body').append(newNew);
    $('body').append(newPNew);
}

function createDivs(){
    let contNew = $('p').length;
    let cont = 0;
    while (cont < contNew){
    $('.contenido' + cont).wrapAll('<div class="marco" />');
        cont++
    }
}

function Ejercicio(){
    $('.marco p').each(function () {
        $(this).css('font-size: ' + textsize + 'px;');
        textsize = textsize + 10
    });
    $('.marco h2').click(function(){
        $(this).hide()
    });
}

$(document).ready(function () {
    for (let x = 0; x < 3; x++){
        createNew(x)
    }
    createDivs();
    Ejercicio();
});



