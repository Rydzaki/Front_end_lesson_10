// Удвоение элементов массива:
const arrNum = [-2, 3, 4, 5, 6, -88, 21, 9, 8];
const arrNumRefactor = arrNum.map((n) => n * 2);
console.log(arrNumRefactor);

console.log("============================");

// Преобразование строк в верхний регистр:
const arr3 = ["Hello", "world"];
const arr3New = arr3.map((n) => n.toUpperCase());
console.log(arr3New);

console.log("============================");

//Вычисление суммы элементов:
// Условие: Создайте массив чисел и используйте метод forEach, чтобы вычислить сумму всех элементов.

let summ3 = 0;
arrNum.forEach((n) => (summ3 += n));
console.log(summ3);

// Удаление отрицательных чисел:
// Условие: Создайте массив чисел и используйте метод filter, чтобы удалить все отрицательные числа.

const evenNum = arrNum.filter((n) => n >= 0);
console.log(evenNum);
