// const car = {
//     manufacturer: "Toyota",
//     model: "Camry",
//     year: 2020,
//     averageSpeed: 80, // в км/ч
//   };
  
//   // Функция для вывода информации об автомобиле
//   function displayCarInfo(car) {
//     console.log(`Марка: ${car.manufacturer}`);
//     console.log(`Модель: ${car.model}`);
//     console.log(`Год выпуска: ${car.year}`);
//     console.log(`Средняя скорость: ${car.averageSpeed} км/ч`);
//   }
  
//   // Функция для подсчета времени в пути
//   function calculateTravelTime(distance) {
//     const travelTimeHours = distance / car.averageSpeed;
//     const restCount = Math.floor(travelTimeHours / 4); // Рассчитываем количество перерывов
//     const totalTravelTimeHours = travelTimeHours + restCount; // Учитываем перерывы
  
//     return totalTravelTimeHours;
//   }
  
//   // Пример использования функций
//   displayCarInfo(car);
//   const distance = 400; // Расстояние в км
//   const travelTime = calculateTravelTime(distance);
//   console.log(`Для преодоления расстояния ${distance} км потребуется ${travelTime.toFixed(2)} часов`);

  

//   задача 2 


//   const fraction1 = {
//     numerator: 2,   // числитель
//     denominator: 3, // знаменатель
//   };
  
//   const fraction2 = {
//     numerator: 4,
//     denominator: 5,
//   };
  
//   // Функция для сложения дробей
//   function addFractions(fraction1, fraction2) {
//     const commonDenominator = fraction1.denominator * fraction2.denominator;
//     const newNumerator = fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator;
//     return reduceFraction({ numerator: newNumerator, denominator: commonDenominator });
//   }
  
//   // Функция для вычитания дробей
//   function subtractFractions(fraction1, fraction2) {
//     const commonDenominator = fraction1.denominator * fraction2.denominator;
//     const newNumerator = fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator;
//     return reduceFraction({ numerator: newNumerator, denominator: commonDenominator });
//   }
  
//   // Функция для умножения дробей
//   function multiplyFractions(fraction1, fraction2) {
//     const newNumerator = fraction1.numerator * fraction2.numerator;
//     const newDenominator = fraction1.denominator * fraction2.denominator;
//     return reduceFraction({ numerator: newNumerator, denominator: newDenominator });
//   }
  
//   // Функция для деления дробей
//   function divideFractions(fraction1, fraction2) {
//     const newNumerator = fraction1.numerator * fraction2.denominator;
//     const newDenominator = fraction1.denominator * fraction2.numerator;
//     return reduceFraction({ numerator: newNumerator, denominator: newDenominator });
//   }
  
//   // Функция для сокращения дроби
//   function reduceFraction(fraction) {
//     const gcd = calculateGCD(fraction.numerator, fraction.denominator);
//     return {
//       numerator: fraction.numerator / gcd,
//       denominator: fraction.denominator / gcd,
//     };
//   }
  
//   // Функция для расчета наибольшего общего делителя (НОД)
//   function calculateGCD(a, b) {
//     if (b === 0) {
//       return a;
//     }
//     return calculateGCD(b, a % b);
//   }
  
//   // Пример использования функций
//   const sumResult = addFractions(fraction1, fraction2);
//   console.log("Сложение:", sumResult);
  
//   const subtractResult = subtractFractions(fraction1, fraction2);
//   console.log("Вычитание:", subtractResult);
  
//   const multiplyResult = multiplyFractions(fraction1, fraction2);
//   console.log("Умножение:", multiplyResult);
  
//   const divideResult = divideFractions(fraction1, fraction2);
//   console.log("Деление:", divideResult);
  
//   const reducedFraction = reduceFraction(fraction1);
//   console.log("Сокращение:", reducedFraction);
  