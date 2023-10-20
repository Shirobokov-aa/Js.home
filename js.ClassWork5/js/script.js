//  Массивы

// let ar = [1,2, "test", true]
// console.log(ar)

// let arr = []
// arr[0] = 12;
// arr [1] = 14;

// console.log(arr[2])


// let array = [10,15,12,14,15,16,123,6123,12341]    // массив

// let sum = 0

// for (let index = 0; index < array.length; index++) {        // цикл
//   sum += array[index]
  
// }
// console.log(sum)

// Двумерный Массив

// let arrayDvum = [
//   [1,2,3],
//   [4,5,6]
// ]
// console.log(arrayDvum)




// Методы массивов

// 1. idexOf  -  поиск значения (поиск индекса)

// let array = [10,15,12,14,15,16,123,6123,12341,123]    
// let indexof = array.indexOf(123)

// console.log (indexof)
// let lastindex = array.lastIndexOf(12)
// console.log(lastindex)



// // 2. idexOf  -  поиск количества одинаковых значения (поиск индекса)



// array = [12,1,12,12,51,512,5123,5123,1,41,654,23,7852,2,4234,1,]
// let counter = 0
// let indexEl = array.indexOf(12)
// while(indexEl != -1){
//   counter++
//   indexEl= array.indexOf(12, indexEl+1)
// }




// console.log(counter)


// indeEl = array.lastIndexOf(12)
// counter = 0
// while(indeEl != -1){
//   counter++
//   if( indexEl ==0){
//     break;
//   }
//   indexEl = array.lastIndexOf(12, indexEl-1)
// }
// console.log(counter)



// // .sort      -     сортировка


// console.log(array.sort())   // криво переводит  сортировку


// //  благоларя конструкции получается его четко отсартировть




// array = [124,561,361,512,123,51,15]
// console.log(array.sort())
// function compareValue (a,b){
//   if(a > b)
//     return 1
//   else if (a < b)
//     return -1
//   else
//     return 0 
// }

// console.log(array.sort(compareValue))




// // строку переводим в массив


// let string = "Яблоко,апельсин,виноград"

// // string.split(separator)


// // разделяющие значение будет определять массив а внем вложенность
// // console.log(string.split(""))
// string = string.split("")
// console.log(string)
// console.log(string.join())


// let array = [5,123,513,634,236,7563,6432,12345]

// function alertArray(arr){
//   let sum = 0
//   for (let index = 0; index < arr.length; index++) {
//     // console.log(arr[index])
//     if(index % 2 ==0){
//       console.log(arr[index])
//       sum += arr[index]
//     }
//   }
//   console.log(`Сумма масива равна ${sum}`)
// }
// alertArray(array)


// ______________________