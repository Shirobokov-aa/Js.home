"use strict"

//Домашнее задание 1

//Часть 1

// let name = prompt()
// console.log("Привет " + name)
// alert("Привет " + name)






//Часть 2

// let age = prompt("Введи год рождения ")
// //age = 2023 - age
// const data = 2023
// age = data - age

// alert("Ваш возраст " + age)
// console.log("тебе братец " + age)






//Часть 3

// let sm = prompt("Бро давай посчитаем длинну квадрата, введи значение одной стороны. ")

// sm = sm * 4
// alert("получается " + sm)
// console.log("получается " + sm)






//Часть 4

// let r = prompt("Введите радиус ")
// let p = Number(r) * Number(r)

// alert("Площаь " + p)
// console.log("Площаь " + p)





//Часть 5

// let km = prompt("Сколько км между городами?")
// let hour = prompt("за какое кол-во времени хотите добраться?")
// let kmH = km / hour

// alert(kmH + "км/ч" + " потребуется ехать для достижения")
// console.log(kmH + "км/ч" + " потребуется ехать для достижения")








//Часть 6

// const usd = 0.93;
// const euro = 1.07;

// const userChoice = confirm("Выберите один из двух вариантов:\n\n1. Обмен USD в EURO (для продолжения нажмите ОК)\n2. EURO в USD (для продолжения нажмите Отмена)");

// if (userChoice) {
//   alert("Вы выбрали первый вариант. Конвектируем USD в EURO");
//   let sumEuro = prompt("Введите кол-во");
//   let result = sumEuro / euro
//   alert("На эту сумму у вас получится купить " + result)  
// } else {
//   alert("Вы выбрали второй вариант. Конвектируем EURO в USD");
//   let sumEuro = prompt("Введите кол-во");
//   let result = sumEuro / usd
//   alert("На эту сумму у вас получится купить " + result)  
// }




//Часть 7 

// const x = 820;
// let y = prompt("Укажите объём картыв GB");

// y = y * 1000;
// let z = y / x;


// alert(Math.floor(z))



//Часть 8

// // Количество шоколадок и сдача:

// const walletAmount = prompt('Введите сумму денег в кошельке:');
// const chocolatePrice = prompt('Введите цену одной шоколадки:');
// const chocolatesBought = Math.floor(walletAmount / chocolatePrice);
// const change = walletAmount % chocolatePrice;
// alert(`Вы можете купить ${chocolatesBought} шоколадок, и у вас останется ${change} сдачи.`);



//  Часть 9
//  Переворот трехзначного числа:

// const number = prompt('Введите трехзначное число:');
// const reversedNumber = (number % 10) * 100 + Math.floor((number % 100) / 10) * 10 + Math.floor(number / 100);
// alert(`Число задом наперед: ${reversedNumber}`);


// Часть 10 Проверка четности числа:


// const userNumber = prompt('Введите целое число:');
// const isEven = userNumber % 2 === 0;
// alert(`Число ${userNumber} ${isEven ? 'четное' : 'нечетное'}.`);