function inicio(){function error() {
    output.innerHTML = "Your browser can't use Geolocation";
};

if (navigator.geolocation){
    console.log('funsiona');
} else {
    error();
}

function LocalizameEsta() {
    console.log('aqui entro y eso, que lo sepas');
    navigator.geolocation.getCurrentPosition(function(pos){
        document.write('<br>' + 'Latitud de tu posicion: ' + pos.coords.latitude + '<br>');
        document.write('------------------------' + '<br>');
        document.write('Longitud de tu posicion: ' + pos.coords.longitude);
    });
}

LocalizameEsta();}

document.getElementById('resto');
inicio();

