var sec = 60;
console.log(sec);

segundo = function () {
    console.clear();
    sec--;
    console.log(sec);
    setTimeout(segundo, 1000);
};

segundo();

               
