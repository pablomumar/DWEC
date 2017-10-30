var num;
var num2;

function greaterNum (num, num2){
    if (num > num2){
        document.write("The greater number of " + num + " and " + num2 + " is " + num + ".</br>");
        return num;
    } else {
        document.write("The greater number of " + num + " and " + num2 + " is " + num2 + ".</br>");
        return num2;
    };
};
console.log(greaterNum(12, 23));
console.log(greaterNum(34, 1));