function RefreshRemi(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            document.getElementById('remitente').innerHTML = this.responseText;
        }
    };
    xhttp.open('GET', 'correo_remi.txt', true);
    xhttp.send();
}

function RefreshMsg(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            document.getElementById('text').innerHTML = this.responseText;
        }
    };
    xhttp.open('GET', 'correo_msg.txt', true);
    xhttp.send();
}

function Refresh() {
    RefreshRemi();
    RefreshMsg();
}

Refresh();
setTimeout(Refresh, 5000);