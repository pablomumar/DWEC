var Promesa = new Promise(
    function (resolve, reject){
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4){
                if (this.status == 200){
                resolve(this.responseText);
            } else {
                    reject('Ha ocurrido un error y no se ha cargado bien')
                }
            }
        };
        xhttp.open('GET', 'datos_promesa.txt', true);
        xhttp.send();
});

function cumplir_prom(){
    Promesa.then(function(texto){
        document.getElementById('parrafo').innerText = texto;
    }).catch(function(error){
            console.log(error)
    });
}

