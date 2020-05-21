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
  while (num === 1){
    return 'Mercury'
  }
  while (num === 2){
    return 'Venus'
  }
  while (num === 3){
    return 'Earth'
  }
  while (num === 4){
    return 'Mars'
  }
  while (num === 5){
    return 'Jupiter'
  }
  while (num === 6){
    return 'Saturn'
  }
  while (num === 7){
    return 'Uranus'
  }
  while (num === 8){
    return 'Neptune'
  }
  while (num === 9){
    return 'Pluto'
  }
  while (num <=0 || num >= 10  || num === undefined){
    return 'There is no such planet'
  }
}


console.log(task6(10));

function task6_2(num) {
  let result
  result = num === 1 ? 'Mercury' 
         : num === 2 ? 'Venus' 
         : num === 3 ? 'Earth' 
         : num === 4 ? 'Mars' 
         : num === 5 ? 'Jupiter' 
         : num === 6 ? 'Saturn' 
         : num === 7 ? 'Uranus' 
         : num === 8 ? 'Neptune'
         : num === 9 ? 'Pluto'
         : 'Planet not found'
  
  return result

}


console.log(task6_2(5));

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