function analizar_mayus(text){
    if (text == text.toUpperCase()){
        console.log('Mayuscula');
        return "Mayuscula"
    } else if (text == text.toLowerCase()) {
        console.log('Minuscula');
        return "Minuscula"
    } else {
        console.log('Mix VERANIEGO DOMILQUINSE');
        return "Mix veraniego"}
}
analizar_mayus('cadena');
analizar_mayus('CADENA');
analizar_mayus('Cadena');
