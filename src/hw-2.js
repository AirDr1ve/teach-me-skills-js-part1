﻿/**
 * Напишите логику, которая умножает все числовые свойства объекта obj на переменную num.
 */
function task1(num) {
  const obj = {
    name: 'Valera',
    age: 20,
    height: 300,
    weight: 30,
    surname: 'Trololo',
  };
  // ваш код должен быть ниже этой строки

  for (const key in obj) {
    if (!isNaN(obj[key])) {
      obj[key] = obj[key] * num;
    }
  }

  // ваш код должен быть выше этой строки
  return obj;
}

console.log(task1(2));

/**
 * Напишите код для суммирования всех значений из obj и сохраните результат в переменной sum.
 */
function task2(num) {
  let sum = null;
  const obj = {
    a: 20,
    b: 10,
    c: 50,
    d: 1,
    e: 5,
  };
  // ваш код должен быть ниже этой строки
  for (const key of Object.values(obj)) {
    sum += key;
  }
  // ваш код должен быть выше этой строки
  return sum;
}

console.log(task2());


/**
 * Напишите код для проверки на существование свойства в объекте. Если свойство property существует в obj,
 * то функция должна возвращать true, в противном случаи false
 */
function task3(obj, property) {
  let result = null;
  // ваш код должен быть ниже этой строки

  for (const key in obj)
    if (key === property) {
      result = true
    } else
      result = false

  // ваш код должен быть выше этой строки
  return result;
}

console.log(task3({
  country: 'Belarus',
  city: 'Minsk'
}, 'city'));
console.log(task3({
  country: 'Belarus'
}, 'city'));

/**
 * Написать логику, что скопирует все свойства из obj в result.
 */
function task4(obj) {
  const result = {};
  // ваш код должен быть ниже этой строки

  Object.assign(result, obj)

  // ваш код должен быть выше этой строки
  return result;
}

console.log(task4({
  country: 'Belarus',
  city: 'Minsk'
}));

/**
 * Ваша реализацимя должна проверить в каком объекте obj1 или obj2 свойств больше, в переменную result
 * положите 1 или 2 в зависимости в каком объекте свойств больше
 */
function task5(obj1, obj2) {
  let result = null;
  // ваш код должен быть ниже этой строки
  let numObj1 = 0;
  let numObj2 = 0;
  for (const key1 in obj1) {
    numObj1 += key1
  };

  for (const key2 in obj2) {
    numObj2 += key2
  };

  if (numObj1 > numObj2) {
    result = 1
  } else result = 2;
  // ваш код должен быть выше этой строки
  return result;
}

console.log(task5());


/**
 * Написать логику, которая должна удалять все свойства из объекта obj.
 */
function task6(obj) {
  // ваш код должен быть ниже этой строки

  for (const key in obj)
    delete obj[key]

  // ваш код должен быть выше этой строки
  return obj;
}

console.log(task6({
  country: 'Belarus',
  city: 'Minsk'
}));

/**
 * Задание с *.
 * Написать цикл (не for..in), который пройдется по объекту obj и выведет все значения в консоль
 */
function task7(obj) {
  // ваш код должен быть ниже этой строки

  // ваш код должен быть выше этой строки

  for ( /* написать условие */ ) {
    console.log();
  }
}

/**
 * Задание с *.
 *  В функции есть 2 аргумента, объект и строка. Написать логику, чтобы их сумма была такого вида:
    obj = {}
    str = "Vitalik"
    Значит результат должен быть "Hello Vitalik"
    Или
    obj = {}
    str = "Katya"
    Результат: "Hello Katya"
 */
function task8(obj, str) {
  let result = null;
  // ваш код должен быть ниже этой строки
  obj.greeting = 'Hello';
  result = obj.greeting + " " + str;
  // ваш код должен быть выше этой строки
  return result;
}

console.log(task8({}, 'Katya'));


/**
 * Задание с *.
 * Все аргументы функции должны добавляться в массив.
 */
function task9() {
  const array = [];
  // ваш код должен быть ниже этой строки
  array = [...arguments];
  // ваш код должен быть выше этой строки
  return array;
}