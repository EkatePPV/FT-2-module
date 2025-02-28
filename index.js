/*    5. Напишите функцию, принимающую на вход массив вещественных
чисел и возвращающую количество элементов, равных предыдущему
элементу. */

let result = 0;

function countEqualToPrevious(arr) {

    let count = 0; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) { 
            count++;
        }
    }

    return count;
    
}

const arr = [1.6, -2, 1.3, 1.3, 3, 2, 2.1, 2.1, 0, 3.9];
console.log("Массив чисел: ", arr);
result = countEqualToPrevious(arr);
console.log("Количество элементов, равных предыдущему элементу: ", result);
console.log(" ");

/* Напишите функцию, принимающую на вход вещественную
прямоугольную матрицу и возвращающую сумму элементов в тех
строках, которые содержат хотя бы один отрицательный элемент. */

function sumNegativeRows(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) {
        console.error("Ошибка: параметр функции должен быть не пустым массивом.");
        return 0;
    }

    let totalSum = 0;

    for (const row of matrix) {
        if (!Array.isArray(row)) {
            console.error("Ошибка: все строки матрицы должны быть массивами.");
            return 0;
        }

        // Проверка наличия хотя бы одного отрицательного элемента в строке
        const hasNegative = row.some(element => typeof element === 'number' && element < 0);

        // Если есть отрицательный элемент, добавляем сумму этой строки к общему результату
        if (hasNegative) {
            totalSum += row.reduce((acc, curr) => acc + (typeof curr === 'number' ? curr : 0), 0);
        }
    }

    return totalSum;
}

const matrix = [
    [1.5, 2.3, -1.0],
    [4.5, 5.5, 6.1],
    [-2.2, 3.3, 4.4],
    [7.0, -8.0, 9.1]
];
console.log("Матрица вещественных чисел: ", matrix);
console.log("Сумма элементов в тех строках, которые содержат хотя бы один отрицательный элемент:", sumNegativeRows(matrix)); 
