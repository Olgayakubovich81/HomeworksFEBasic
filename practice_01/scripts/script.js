// // Задание. Составьте программу, которая выводит на экран все двузначные положительные числа, делящиеся без остатка на 5
// // (начиная с наименьшего).


// for (let i = 10; i < 100; i++) {
//     if (i % 5 === 0) {
//       console.log(i);
//     }
//   }
  
// // Задание. Найти сумму всех элементов массива

// // // let array = [5, 10, 15, 20, 25];
// // // let sum = 0;

// // for (let i = 0; i < array.length; i++) {
// //   sum += array[i];
// // }
// // console.log("Сумма всех элементов массива:", sum);


// // // Задание. Найти сумму чисел, чей индекс равен значению элемента.
// // let array = [0, 1, 2, 3, 4, 5];
// // let sum = 0;
// // for (let i = 0; i < array.length; i++) {
// //   if (array[i] === i) {
// //     sum = sum +array[i];
// //   }
// // }
// // console.log("Сумма чисел, где индекс равен значению элемента:", sum);

// // Задание: 1. Создайте массив styles с элементами «Джаз» и «Блюз».

// let array= ["Джаз", "Блюз"];
// console.log (array)

// // 2. Добавьте «Рок-н-ролл» в конец.

// array.push ("Рок-н-ролл")
// console.log (array)
// // 3. Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// // let pos=1
// // let removedItem = array.splice(pos, 1);

// array.push ('Классика')

// // 4. Удалите первый элемент массива и покажите его.
// let pos=1
// let removed= array.splice (pos, 1);
// console.log (removed)
// // 5. Вставьте Рэп и Регги в начало массива.

// array.unshift ("Реп", "Регги")
// console.log (array)


// 1. Составьте программу, которая присваивает переменной d значение 7, а затем выводит на экран: в первой строке - это значение, во второй –
// квадрат этого значения, в третьей – куб этого значения. Программа должна выводить на экран новое значение.

// let d=7
// console.log (d)
// console.log (d*2)
// console.log (d*3)

// 2. Составьте программу, которая принимает с клавиатуры два целых числа и, если первое больше второго, выводит на экран их сумму, если же
// наоборот – выводит на экран их произведение. В случае же, если числа одинаковы, программа выводит на экран сообщение "числа одинаковые".

let num = 20
let num1= 20
if (num>num1) 
console.log (num+num1) 
else if (num1>num)
(console.log (num*num1))
else (console.log ("числа одинаковые"))



// 3. Составьте программу, которая принимает с клавиатуры целое число и, если оно положительное, выводит его куб.

let num3=-5
if (num3>0) 

console.log (num3*3)
else (console. log ("false"))

// 4. Составьте программу, которая принимает с клавиатуры два числа: первое – количество учеников в классе, второе – количество стульев в
// кабинете. Программа проверит соответствие между этими двумя значениями и выведет на экран соответствующую информацию.
let num4= 24
let num5=22

if (num5>=num4 )
console.log ("стульев хватает")
else  (console.log ("стульев не хватает"))

// ввод: 24, 28 ⇒ вывод: стульев хватает; ввод: 24, 22 ⇒ вывод: стульев не хватает

// 5. Составьте программу, которая выводит на экран все однозначные положительные числа в возрастающем порядке.


// for (let i = 1; i <= 9; i++) {
//     console.log(i);
//   }
  

// 6. Написать цикл, который выводит те числа из массива, которые больше или равны 15.

// let array =[3,10,44,105, 2, 13, 56, 102, 78, 25,100];
 
// for (let i=0; i<array.length; i++)
// if (array [i]>=15) 
// {console.log (array [i])}


// 7. Написать цикл, который выводит только нечетные числа массива

// let array =[3, 10,44, 105, 2, 13, 56, 102, 78, 25, 100];
// for (let i=0; i<array.length; i++)
// if (array [i]%2 !==0)
// {console.log (array [i])}



// 8. Вывести только те значения массива, индекс которых кратен трем.
// let array =[3, 15, 45, 10, 44, 65, 105, 2, 13, 56, 102, 78, 25, 100];
// for (let i=0; i<array.length; i++)
// if ( array [i]%3 ===0)
// {console.log (array [i])}

// 9. Найти сумму нечетных чисел и вывести в консоль.
// let array =[3, 15, 45, 10, 11,20];
// let sum=0
// for (let i=0; i<array.length; i++)
// if ( array [i]%2 !==0)
// sum= sum+array [i]
// {console.log (sum)}

// 10. Найти сумму четных и нечетных чисел из массива и вывести разницу между ними. Вычесть из большего меньшее.

let array =[3, 15, 45, 10, 44, 65, 105, 2, 13, 56, 102, 78, 25, 100]

let Evensum=0
let Oddsum=0
for (let i=0; i<array.length; i++) 
if (array [i]%2===0) {Evensum=Evensum+array [i]}
else {Oddsum=Oddsum+ array [i]}

{console.log (Evensum-Oddsum)}





