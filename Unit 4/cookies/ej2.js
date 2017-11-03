function setCookie(){
    usuario = document.getElementById('UserName');
    document.cookie ? (
        cookiesplit = document.cookie.split(' '),
        alert('Hola ' + cookiesplit[0]),
        document.write("<input type='submit' onclick='borrarcookies()' value='Borrar'>")
    ):(
        document.write("UserName:&nbsp<input type='text' id='UserName'/>"),
        document.write("<br><input type='submit' onclick='guardarUsuario()' value='Guardar'>"),
        document.write("<input type='submit' onclick='borrarcookies()' value='Borrar'>")),
        document.write("")
    // Añadir elementos para cambiar el bgcolor, fontsize y paragrahp colorhj
    ;
}

function guardarUsuario() {
    tiempoExpire = new Date();
    tiempoExpire.setSeconds(5000);
    tiempoExpireString = tiempoExpire.toUTCString();
    nombreUsuario = document.getElementById('UserName').value;
    document.cookie = 'username=' + nombreUsuario +'; expires=' + tiempoExpireString ;
    alert('Hola ' + nombreUsuario + ' Expires: ' + tiempoExpireString);
    console.log(document.cookie);
}

function borrarcookies() {
    document.cookie = 'username=; expires="Sun, 15 Jul 2012 00:00:01 GMT"';
}

function setBgColor() {

}

function setFontSize() {

}

function setParagColor() {

}