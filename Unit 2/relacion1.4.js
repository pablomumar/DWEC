var sec = 60;
console.log(sec);

segundo = function () {
    console.log('aqui toy');
    console.clear();
    sec--;
    console.log(sec);
    if (sec > 0) {
        setTimeout(segundo, 1000);
    } else {
        console.log('he parao loko');
    }
};

segundo();