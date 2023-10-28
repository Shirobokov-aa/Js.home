// Для решения этих задач можно выбрать различные типы циклов в зависимости от конкретных требований:

// Подсчитать сумму всех чисел в заданном пользователем диапазоне.

// В этой задаче лучше всего использовать цикл for, так как вы заранее знаете диапазон, в котором нужно подсчитать сумму. Например:

// const start = parseInt(prompt('Введите начало диапазона:'));
// const end = parseInt(prompt('Введите конец диапазона:'));
// let sum = 0;

// for (let i = start; i <= end; i++) {
//   sum += i;
// }

// alert(`Сумма всех чисел в диапазоне от ${start} до ${end}: ${sum}`);


// Запросить 2 числа и найти только наибольший общий делитель.

// В этой задаче также лучше использовать цикл for. Вы можете воспользоваться алгоритмом поиска наибольшего общего делителя (НОД), таким как алгоритм Евклида:


// const num1 = parseInt(prompt('Введите первое число:'));
// const num2 = parseInt(prompt('Введите второе число:'));

// function findGCD(a, b) {
//   while (b !== 0) {
//     const temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return a;
// }

// const gcd = findGCD(num1, num2);
// alert(`Наибольший общий делитель чисел ${num1} и ${num2}: ${gcd}`);


// Запросить у пользователя число и вывести все делители этого числа.

// Здесь также подойдет цикл for, так как вы заранее не знаете, сколько делителей у числа:

// const number = parseInt(prompt('Введите число:'));
// const divisors = [];

// for (let i = 1; i <= number; i++) {
//   if (number % i === 0) {
//     divisors.push(i);
//   }
// }

// alert(`Делители числа ${number}: ${divisors.join(', ')}`);


// Определить количество цифр в введенном числе.

// В этой задаче можно использовать цикл while, так как вы можете продолжать проверку до тех пор, пока число не станет равным нулю:

// const number = parseInt(prompt('Введите число:'));
// let count = 0;
// let tempNumber = Math.abs(number);

// if (tempNumber === 0) {
//   count = 1; // Если число равно нулю, то у него 1 цифра.
// } else {
//   while (tempNumber > 0) {
//     tempNumber = Math.floor(tempNumber / 10);
//     count++;
//   }
// }

// alert(`Количество цифр в числе ${number}: ${count}`);

// Проверка, является ли пятизначное число палиндромом:


// const number = prompt('Введите пятизначное число:');
// const numString = number.toString();

// if (numString.length !== 5) {
//   alert('Вы ввели не пятизначное число.');
// } else {
//   const reversedNumString = numString.split('').reverse().join('');
//   if (numString === reversedNumString) {
//     alert('Введенное число является палиндромом.');
//   } else {
//     alert('Введенное число не является палиндромом.');
//   }
// }


// Конвертер валют:


// const usdAmount = parseFloat(prompt('Введите сумму в долларах (USD):'));
// const selectedCurrency = prompt('Выберите валюту для конвертации: EUR, UAN или AZN').toUpperCase();

// let convertedAmount;
// const exchangeRates = {
//   EUR: 0.85,  // Курс доллара к евро
//   UAN: 27.7,  // Курс доллара к украинской гривне
//   AZN: 1.7    // Курс доллара к азербайджанскому манату
// };

// if (exchangeRates[selectedCurrency]) {
//   convertedAmount = usdAmount * exchangeRates[selectedCurrency];
//   alert(`Сумма в ${selectedCurrency}: ${convertedAmount.toFixed(2)}`);
// } else {
//   alert('Выбрана неподдерживаемая валюта. Пожалуйста, выберите EUR, UAN или AZN.');
// }
