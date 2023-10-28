// // Функция, которая сравнивает два числа:

// // function compareNumbers(num1, num2) {
// //     if (num1 < num2) {
// //       return -1;
// //     } else if (num1 > num2) {
// //       return 1;
// //     } else {
// //       return 0;
// //     }
// // }
  
// // const result = compareNumbers(5, 8);
// // console.log(result); // Выведет -1

  
// // Функция для вычисления факториала:

// // function factorial(n) {
// //     if (n === 0 || n === 1) {
// //       return 1;
// //     } else {
// //       return n * factorial(n - 1);
// //     }
// //   }
  
// //   const result = factorial(5);
// //   console.log(result); // Выведет 120
  

// //   Функция, которая объединяет три цифры в одно число:


// //   function combineDigits(digit1, digit2, digit3) {
// //     return parseInt(`${digit1}${digit2}${digit3}`, 10);
// //   }
  
// //   const result = combineDigits(1, 4, 9);
// //   console.log(result); // Выведет 149
  

// задача 4

// function calculateRectangleArea(length, width) {
//     if (width === undefined) {
//       // Если передан только один параметр, то считаем площадь квадрата
//       return length * length;
//     } else {
//       // Иначе считаем площадь прямоугольника
//       return length * width;
//     }
//   }
  
//   const squareArea = calculateRectangleArea(5);
//   console.log(squareArea); // Выведет 25 (площадь квадрата)
  
//   const rectangleArea = calculateRectangleArea(4, 6);
//   console.log(rectangleArea); // Выведет 24 (площадь прямоугольника)

  

//   задача 5 

//   function isPerfectNumber(number) {
//     if (number <= 0) {
//       return false; // Совершенные числа должны быть положительными
//     }
  
//     let sum = 0;
//     for (let i = 1; i < number; i++) {
//       if (number % i === 0) {
//         sum += i;
//       }
//     }
  
//     return sum === number;
//   }
  
//   const result1 = isPerfectNumber(28);
//   console.log(result1); // Выведет true, так как 28 - совершенное число
  
//   const result2 = isPerfectNumber(12);
//   console.log(result2); // Выведет false, так как 12 - не совершенное число
  