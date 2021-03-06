/**
 * Проверить строку str на уникальные символы, если все символы в строке встречаются один раз, то
 * функция должна возвращать true, в противном случаи false
 * Например:
 *  "avbhye3" => true
 *  "afsbvra" => false
 *  "Aaret64ip" => true
 */
function task1(str) {

  for (let b = 0; b < str.length; b++) {
    if (str.split(str[b]).length - 1 > 1) {
      return false;
    }
  }
  return true;

}

console.log(task1('adv'));
console.log(task1('advd'));


/**
 * Проверить строку str на буквы, если в строке есть буквы, то их нужно вынести в переменную result и вернуть эту
 * переменную
 */
function task2(str) {
  let result = '';

  result = str.replace(/[^a-zА-я]/gm, result);


  return result;
}


console.log(task2('6456_Б6456_+:::у4535878л5345_1"б345а'));

/**
 * arr массив чисел. Нужно найти в массиве найбольшое число и вернуть его
 */
function task3(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;

}

console.log(task3([3, 5, 1, 51]));
console.log(task3([31, 512, 1541, 51]));



function task3_2(arr) {
  return Math.max(...arr)

}

console.log(task3_2([3, 5, 1, 51]));
console.log(task3_2([31, 512, 1541, 51]));


/**
 * В функцию приходит объект obj. Нужно скопировать все его свойства в объект result и вернуть его
 */
function task4(obj) {
  const result = {};
  // ваш код должен быть ниже этой строки
  Object.assign(result, obj)
  // ваш код должен быть выше этой строки
  return result;
}

function task4_2(obj) {
  let result = {};
  // ваш код должен быть ниже этой строки
  result = {
    ...obj
  }
  // ваш код должен быть выше этой строки
  return result;
}


console.log(task4_2({
  name: 2,
  text: 'sads'
}));


/**
 * Приходит строка str такого вида "Ivan Ivanov", вы должны сохранить первые символы в переменную result. Должен
 * иметь такой вид "I.I."
 * Еще пример: str => "Vitalik Skopets". result => "V.S."
 */
function task5(str) {

  let result = str.replace(/(.).+ (.).+/, '$1. $2.');

  return result
}

console.log(task5('Ilya Bogdanov'));

/**
 * Написать логику, которая будет возвращать название планеты. По ее номеру начиная от ближайшей к солнцу.
 * Примечание: написать эту логику без if и switch!!!!!!!
 */
function task6(num) {
  let arr = [, 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
  return arr[num];
}


console.log(task6());

/**
 * Функция должна удалять первый и последний символы из строки str и вернуть получившеюся строку.
 */
function task7(str) {
  let result = ''
  result = str.slice(1, -1)
  return result
}

console.log(task7('123456789'));
console.log(task7('abc'));