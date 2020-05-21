function fibo(num) {
    let sum = 0;
    let arr = [];

    for (let i = 0; i < num; i++) {
        if (arr.length > 1) sum += arr[arr.length - 2];
        if (arr.length === 1) sum = 1;
        if (arr.length === 0) sum = 0;
        arr.push(sum);
    }

    console.log(arr);

}

fibo(10);

