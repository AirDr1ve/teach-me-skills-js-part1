/**
 * Написать функцию, которая будет считать ряд Фибоначчи. Функция должна возвращать массив из чисел
 * Фибоначчи, длина массива будет приходить, как аргумент функции
 */
function fibonacci(length) {
    let sum = 0;
    let arr = [];

    for (let i = 0; i < length; i++) {
        if (arr.length > 1) sum += arr[arr.length - 2];
        if (arr.length === 1) sum = 1;
        if (arr.length === 0) sum = 0;
        arr.push(sum);
    }

    console.log(arr);
}

fibonacci(19)


/**
 * Написать свою функцию map
 */
function map(array, callback){
    let arrayResault = [];
    for ( let i = 0; i < array.length; i++) {
      arrayResault[i] = callback(array[i]);
    }
    return arrayResault
  }
   console.log(map(['if', 'whay', 'house', 'street'], function(len){
     return len.length
   }));
  
   console.log(map([2, 10, 14, 24, 4], function(del){
     return del/2
  
   }));

/**
 * Написать свою функцию filter
 */
function filter(array, callback) {
    let arrayResult = [];
    
}

/**
 * Написать свою функцию indexOf
 */
function indexOf(array, value, fromIndex) {

    let result = array.indexOf(3)
    return result
}


console.log(indexOf([2, 6, 8, 6, 37, 3, 5]));

/**
 * Написать свою функцию reduce
 */
function reduce(array, callback, acc) {

}

/**
 * Написать свою функцию find
 */
function find(array, callback) {

}

/**
 * Написать свою функцию sort
 */
function sort(array, callback) {

}

/**
 * Написать свою функцию Object.keys
 */
function objectKeys(obj) {

}

/**
 * Написать свою функцию Object.values
 */
function objectValues(obj) {

}