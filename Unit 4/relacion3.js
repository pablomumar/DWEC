var nombre = /^[a-zA-Z ]+$/;
var usuario = /^[\w-]+$/;
var DNI = /^\d{8}[a-zA-Z]$/;
var email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var tlfn = /^\d{9}$/;

var validar_nombre = () => {
    document.getElementById('nombre').value.match(nombre) ? (
        document.getElementById('correcto').style.visibility = 'visible',
        document.getElementById('incorrecto').style.visibility = 'hidden'
        ) : (
        document.getElementById('incorrecto').style.visibility = 'visible',
        document.getElementById('correcto').style.visibility = 'hidden');
}

var validar_apellidos = () => {
    document.getElementById('apellidos').value.match(nombre) ? (
        document.getElementById('correcto2').style.visibility = 'visible',
        document.getElementById('incorrecto2').style.visibility = 'hidden'
    ): (
        document.getElementById('incorrecto2').style.visibility = 'visible',
        document.getElementById('correcto2').style.visibility = 'hidden');
}

var validar_DNI = () => {
    document.getElementById('DNI').value.match(DNI) ? (
        document.getElementById('correcto3').style.visibility = 'visible',
        document.getElementById('incorrecto3').style.visibility = 'hidden'
    ): (
        document.getElementById('incorrecto3').style.visibility = 'visible',
        document.getElementById('correcto3').style.visibility = 'hidden');
}

var validar_email = () => {
    document.getElementById('email').value.match(email) ? (
        document.getElementById('correcto5').style.visibility = 'visible',
        document.getElementById('incorrecto5').style.visibility = 'hidden'
    ): (
        document.getElementById('incorrecto5').style.visibility = 'visible',
        document.getElementById('correcto5').style.visibility = 'hidden');

}

var validar_tlfn = () => {
    document.getElementById('telefono').value.match(tlfn) ? (
        document.getElementById('correcto4').style.visibility = 'visible',
        document.getElementById('incorrecto4').style.visibility = 'hidden'
    ): (
        document.getElementById('incorrecto4').style.visibility = 'visible',
        document.getElementById('correcto4').style.visibility = 'hidden');
}

var validar_usuario = () => {
    document.getElementById('usuario').value.match(usuario) ? (
        document.getElementById('correcto6').style.visibility = 'visible',
        document.getElementById('incorrecto6').style.visibility = 'hidden'
    ): (
        document.getElementById('incorrecto6').style.visibility = 'visible',
        document.getElementById('correcto6').style.visibility = 'hidden');
}