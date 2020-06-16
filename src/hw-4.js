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
function map(array, callback) {
  let arrayResault = [];
  for (let i = 0; i < array.length; i++) {
    arrayResault[i] = callback(array[i]);
  }
  return arrayResault
}
console.log(map(['if', 'whay', 'house', 'street'], function (len) {
  return len.length
}));

console.log(map([2, 10, 14, 24, 4], function (del) {
  return del / 2

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
  let i = fromIndex ? fromIndex : 0;
  for (; i < array.lenght; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(indexOf([7, 21, 283, 87], 7));



/**
 * Написать свою функцию reduce
 */
function reduce(array, callback, acc) {
  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i]);
  }
  return acc
}

console.log(reduce(['M', '1', 'N', 'S', 'K'], function (acc, value) {
  return acc = acc + value;
}, ''));

/**
 * Написать свою функцию find
 */
function find(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i]
    }
  }
}

console.log(find([10, 2, 3, 6], function (fin) {
  if (fin === 10) {
    return true
  }
}));

/**
 * Написать свою функцию sort
 */
function sort(array, callback) {
  for (let i = 0; i < array.length; i++) {
    for (let g = 0; g < array.length; g++) {
      let first = array[g];
      let second = array[g + 1];
      if (callback(first, second)) {
        array[g] = second;
        array[g + 1] = first;
      }
    }

  }
  return array;
}


console.log(sort([0, 5, 2, 6, 1, -2, 13], function (a, b) {
  return a > b;
}));

/**
 * Написать свою функцию Object.keys
 */
function objectKeys(obj) {
  let array = [];
  for (let key in obj) {
    array.push(key);
  }
  return array
}

console.log(objectKeys({
  number: 1,
  name: 'Ilya',
  age: 27
}));

/**
 * Написать свою функцию Object.values
 */
function objectValues(obj) {
  let array = [];
  for (let key in obj) {
    array.push(obj[key]);
  }
  return array

}

console.log(objectValues({
  number: 1,
  name: 'Ilya',
  age: 27
}));