var celsius = 30;

document.write("We have stored " + celsius +"º <strong>Celsius</strong>" + "</br>");

function CalcFarh (celsius){
    return celsius = (celsius * (9/5) + 32);
};

document.write("Transformed to <strong>Farhenheit</strong>, we have " + CalcFarh(celsius) + "º<strong>F</strong>" + "</br>" + "</br>");

let farh;
farh = 77;

document.write("Now, we have stored " + farh +"º<strong>F</strong>" + "</br>");

function CalcCel (farh){
    return farh = ((farh -32)/1.8);
};

document.write("Transformed to <strong>Celsius</strong>, we have " + CalcCel(farh) + "º<strong>C</strong>" + "</br>");
