var idioma;

function HelloWorld(idioma){
    switch(idioma) {
        case "es":
            document.write("Hola mundo!");
            break;
        case "de":
            document.write("Hola mundo en aleman");
            break;
        case "en":
            document.write("Hello World!");
            break;
        case "ru":
            document.write("Cyka blyat!");
            break;
        default:
            document.write("No language registered");
            break;
        } 
}

console.log(HelloWorld("ru"));