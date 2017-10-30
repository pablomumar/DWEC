function paresImpares (min, max){
    let arr = [];
    for (let x = 0; x < 100; x++) {
        arr[x] = Math.floor(Math.random() * (max - min)) + min;
    }
    let sorted_arr = [];
    for ( let numero of arr) {
        if (numero%2 === 1){
            sorted_arr.push(numero);
        } else {
            sorted_arr.unshift(numero);
        }
    }
    console.log(arr);
    console.log(sorted_arr);
    return {
        arr: arr,
        sorted_arr: sorted_arr
    };
}

paresImpares(1, 1000);