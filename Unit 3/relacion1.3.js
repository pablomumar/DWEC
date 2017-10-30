let c_tiradas = [0, 0, 0, 0, 0, 0];

function lanzamiento() {
    let tirada = Math.floor(Math.random() * (7 - 1)) + 1;
    console.log(tirada);
    return tirada;
}

for (let x=0; x < 6000; x++) switch (lanzamiento()) {
    case 1:
        c_tiradas[0] = c_tiradas[0] + 1;
        break;
    case 2:
        c_tiradas[1] = c_tiradas[1] + 1;
        break;
    case 3:
        c_tiradas[2] = c_tiradas[2] + 1;
        break;
    case 4:
        c_tiradas[3] = c_tiradas[3] + 1;
        break;
    case 5:
        c_tiradas[4] = c_tiradas[4] + 1;
        break;
    case 6:
        c_tiradas[5] = c_tiradas[5] + 1;
        break;
}

document.write('Las veces que ha salido 1: ' + c_tiradas[0]);
document.write('</br>Las veces que ha salido 2: ' + c_tiradas[1]);
document.write('</br>Las veces que ha salido 3: ' + c_tiradas[2]);
document.write('</br>Las veces que ha salido 4: ' + c_tiradas[3]);
document.write('</br>Las veces que ha salido 5: ' + c_tiradas[4]);
document.write('</br>Las veces que ha salido 6: ' + c_tiradas[5]);