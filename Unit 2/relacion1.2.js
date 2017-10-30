var fecha = new Date();

document.write(fecha);

function cambioDias(fecha, dias){
  fecha.setDate(fecha.getDate() + dias);
  return fecha;
};

var fecha85 = cambioDias(fecha, 85);
document.write('<br> fecha85  --> ' + fecha85);

var fecha187 = cambioDias(fecha, 187);
document.write('<br> fecha187  --> ' + fecha187)


var nFecha85 = fecha85.setFullYear(fecha85.getFullYear() + 2);

nFecha85 = new Date(nFecha85);
document.write('<br> fecha85 más 2 años --> ' + nFecha85);

nFecha187 = cambioDias(fecha187, -1);
document.write('<br> fecha187 menos 24h --> ' + nFecha187);

fechaResto = new Date()
var fechaResto = fechaResto.setDate(fecha85.getDate() - fecha187.getDate());
fechaResto = new Date(fechaResto)
document.write('<br> fecha85 menos fecha187 --> ' + fechaResto);