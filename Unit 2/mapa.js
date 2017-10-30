function initMap(){
    navigator.geolocation.getCurrentPosition(function(pos){ var ayala = {lat: pos.coords.latitude, lng: pos.coords.longitude};
        var mapa = new google.maps.Map(document.getElementById('mapa'), {
            zoom: 40,
            center: ayala
        });
        var marker = new google.maps.Marker({
            position: ayala,
            map: mapa
        });
    });
}
initMap();