/**
 * Напишите код, чтобы вызвав эту фукнцию с 2 чсилами и одной строкой вы получили их сумму в переменной sum
 * если строка придет с символами, то результат функции должна быть строка "неверные данные"
 */
function task1(num1, num2, str) {
  let sum = null;
  // ваш код должен быть ниже этой строки

  str = Number(str);
  if (str <= 0 || str >= 0) {
    sum = num1 + num2 + str;
  } else {
    sum = 'неверные данные';
  }

  // ваш код должен быть выше этой строки
  return sum;
}

console.log(task1(3, 2, '14'));
console.log(task1(1, 1, '8'));
console.log(task1(8, 5, 'ghh'));

console.log('----------------------');



/**
 * Код ниже перепишете с использованием switch

  let result = null;

  if (age > 5) {
    result = 'Он старше 5 лет';
  } else if (age > 8) {
    result = 'Он старше 8 лет';
  } else if (age > 11) {
    result = 'Он старше 11 лет';
  } else {
    result = 'Нет подходящего возраста';
  }

 */
function task2(age) {
  let result = null;
  // ваш код должен быть ниже этой строки

  switch (age) {
    case 5:
    case 6:
    case 7:
    case 8:
      result = 'Он старше 5 лет';
      break;
    case 9:
    case 10:
    case 11:
      result = 'Он старше 8 лет';
      break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
      result = 'Он старше 11 лет';
      break;
    default:
      result = 'Нет подходящего возраста';
  }

  // ваш код должен быть выше этой строки
  return result;
}

console.log(task2(6));
console.log('----------------------');


/**
 * Используя while напишите цикл от 0 до 21 и каждое нечетное число суммируйте к переменной result
 *
 */
function task3() {
  let result = 0;
  // ваш код должен быть ниже этой строки
  let i = 0
  while (i < 21) {
    if (i % 2) {
      result += i
    }
    i++
  }
  // ваш код должен быть выше этой строки
  return result;
}

console.log(task3());
console.log('----------------------');



/**
 * Используя for напишите цикл от 0 до 100. На каждой итерации, что делится на 5 без остатка
 * в консоль нужно отображать цифру 5.
 *
 */
function task4() {


  // ваш код должен быть ниже этой строки
  for (let i = 0; i < 100; i++)
    if (!(i % 5))

      console.log(5);

  // ваш код должен быть выше этой строки

}

task4()


/**
 * В функцию приходят 4 аргумента все разных типов, какие бы не были значения результат всегда должен быть один и тот же, true
 *
 */
function task5(num, str, bool, val) {
  let result = num || str || bool || val; // выражение с || менять нельзя, остальное в ваших руках

  return result;
}

/**
 * Вы должны дополнить код так, чтобы переменная result была не больше number
 */
function task6(number) {
  let result = 0;

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      // ваш код должен быть ниже этой строки

      result += i + j;
      if (result >= number) {
        result -= i + j
      }
      // ваш код должен быть выше этой строки
    }
  }

  return result;
}

console.log(task6(8));
console.log(task6(80));
console.log(task6(458));


/**
 * Написать такой цикл, чтобы заполнить переменную result символами своего имени,
 * таким образом результатом этой функции будет ваше имя.
 *
 */
function task7() {
  let result = null;
  // ваш код должен быть ниже этой строки
  for (let i = 0; i < 10; i++)
    if (i <= 1) {
      result = 'И'
    } else if (i <= 2) {
    result += "л"
  } else if (i <= 3) {
    result += "ь"
  } else if (i <= 4) {
    result += "я"

  }

  // ваш код должен быть выше этой строки
  return result;
}

console.log(task7());



/**
 * Задание с *.
 * Написать код таким образом, чтобы можно было выполнить любое матемптичиское действие с num и str
 */
function task8(num) {
  let str = '10n';
  let result = null;
  // ваш код должен быть ниже этой строки
  str = str.replace(/\D+/g, '')
  str = Number(str)
  result = num * str
  // ваш код должен быть выше этой строки
  return result;
}

console.log(task8(5));
console.log(task8(11));