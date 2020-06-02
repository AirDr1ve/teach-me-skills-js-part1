/**
 * Написать функцию, которая будет принимать бесконечное количество аргументов(коллбэк кфнкций) и во втором вызове
 * бесконечное количесвто аргументов.
 * Например: foo(foo1(foo2(10)))
 * Ваша функция должна выглядеть так:
 * task1(foo, foo1, foo2)(10);
 */
function task1() {

}

/**
 * Напсиать функцию, которая будет принимать строку. Функция должна проверить явяляется ли строка палиндромом
 */
function task2(str) {
    str = str.toLowerCase().replace(/\s/g,'');
    return str === str.split('').reverse().join('');
}

console.log(task2('Шалаш'));

/**
 * Написать функцию, которая будет принимать целое число n. Нужно вывести в консоль числа от 1 до n.
 * Вместо чисел кратных на 3 выводить fizz, вместо чисел кратных 5 - buzz. Если числа кратные 15, то fizzbuzz
 */
function task3(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }

}

task3(31);

/**
 * Напсиать функцию, что будет принимать 2 аргумента, строки. Вы должны проверить является ли второе слово анаграммой
 * второго.
 * Примеры:
 * anagram('finder', 'Friend'); => true
 * anagram('', ''); => false
 */
function task4(original, test) {

    function buildCharObj(str) {
        const charObj = {};
        str = str.toLowerCase().replace(/[^\w]/g);
        for (let char of str) {
            charObj[char] = charObj[char] + 1 || 1;
        }
        return charObj
    }

    const charObj1 = buildCharObj(original);
    const charObj2 = buildCharObj(test);

    if (Object.keys(charObj1).length !== Object.keys(charObj2).length) {
        return false
    }
    for (let char in charObj1) {
        if (charObj1[char] !== charObj2[char]) {
            return false
        }
    }
    return true
}

console.log(task4('finder', 'Friend'))
console.log(task4('finder', 'Friends'))


function anagram(original, test) {
    return test.toLowerCase().split('').sort().join() === original.toLowerCase().split('').sort().join();

}

console.log(anagram('finder', 'Friend'))
console.log(anagram('finder', 'Friends'))




/**
 * Написать функцию, которая будет принимать число. Функция должна возвращать массив чисел, которые являются делителями.
 */
function task5(num) {  
    let result = [];  
    for (var i = 1; i <= num; i++) {  
      if(num % i === 0) {    
        result.push(i);  
      }  
    }  return result; 
  }
  console.log(task5(24));