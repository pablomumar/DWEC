function comprobar_user() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (!this.response){
                document.getElementById('marco_comp').innerText = 'El usuario esta pillao';
            } else {
                document.getElementById('marco_comp').innerText = 'Usuario disponible';
            }
        }
    };
    xhr.open('GET', 'file.php', true);
    xhr.send();
}