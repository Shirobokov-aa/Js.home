//  Задание 1

// let x = prompt("введите возраст")

// if (x > 0 && x < 3){
//     alert ("rebenok")
// }else if(x > 3 && x < 18){
//     alert ( "podrostok")
// }else if (x > 18 && x < 60){
//     alert ("vzrosly")
// }else{
//     alert("xz kto")
// }


// Задание 2 

// let x = (+ prompt("vvedy 4eslo"))

// switch (x) {
//     case 1:
//         alert("!")
//         break;
//     case 2:
//         alert("@")
//         break;
//     case 3:
//         alert("#")
//         break;
//     case 4:
//         alert("$")
//         break;
//     case 5:
//         alert("%")
//         break;
//     case 6:
//         alert("!")
//         break;
//     case 7:
//         alert("!")
//         break;
//     case 8:
//         alert("!")
//         break;
    
//     default:
//         alert("4ucJIo He IIoDXoDuT")
//         break;
// }

// Задание 3

// let x = prompt("Введите трехзначное число:");

// let digit1 = parseInt(x.charAt(0));
// let digit2 = parseInt(x.charAt(1));
// let digit3 = parseInt(x.charAt(2));


// if (digit1 === digit2 || digit1 === digit3 || digit2 === digit3) {
//     alert("В числе есть одинаковые цифры.");
// } else {
//     alert("В числе нет одинаковых цифр.");
// }

// Задание 4

// let yearInput = prompt("Введите год:");

// let year = parseInt(yearInput);

// if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
//   alert(`${year} год является високосным.`);
// } else {
//   alert(`${year} год не является високосным.`);
// }


// Задание 5

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


// задача 6

// Задача 8 

// const purchaseAmount = parseFloat(prompt('Введите сумму покупки:'));
// let discount = 0;

// if (purchaseAmount >= 200 && purchaseAmount < 300) {
//   discount = 0.03;
// } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
//   discount = 0.05;
// } else if (purchaseAmount >= 500) {
//   discount = 0.07;
// }

// const discountedAmount = purchaseAmount - purchaseAmount * discount;
// alert(`Сумма к оплате со скидкой: ${discountedAmount.toFixed(2)}`);


// задача 9 

// let score = 0;

// const question1 = prompt('Вопрос 1: Сколько планет в Солнечной системе?\n1. 7\n2. 8\n3. 9');
// if (question1 === '2') {
//   score += 2;
// }

// const question2 = prompt('Вопрос 2: Какое химическое обозначение углекислого газа?\n1. CO\n2. CO2\n3. O2');
// if (question2 === '2') {
//   score += 2;
// }

// const question3 = prompt('Вопрос 3: Кто написал "Война и мир"?\n1. Фёдор Достоевский\n2. Лев Толстой\n3. Антон Чехов');
// if (question3 === '2') {
//   score += 2;
// }

// alert(`Вы набрали ${score} баллов.`);



// задача 10

// const day = parseInt(prompt('Введите день:'));
// const month = parseInt(prompt('Введите месяц (1-12):'));
// const year = parseInt(prompt('Введите год:'));

// const date = new Date(year, month - 1, day); // Месяцы в JavaScript начинаются с 0 (январь) до 11 (декабрь)
// date.setDate(date.getDate() + 1); // Увеличиваем день на 1

// const nextDay = date.getDate();
// const nextMonth = date.getMonth() + 1;
// const nextYear = date.getFullYear();

// alert(`Следующая дата: ${nextDay}.${nextMonth}.${nextYear}`);
