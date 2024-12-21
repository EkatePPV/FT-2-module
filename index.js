/* Напишите исходный код программы, которая считывает единственное
целое число c и проверяет, является ли оно негипотенузным.
Негипотенузное число – натуральное число, квадрат которого не
может быть записан как сумма двух ненулевых квадратов чисел.
Примеры негипотенузных чисел: 1, 2, 3, 4, 6, 7, ....*/

const input = prompt("Введите целое число c:");
const number = parseInt(input);

if (!isNaN(number)) {
    if (number <= 0) {
        alert("Пожалуйста, введите корректное целое число.");
    } else {
        const square = number * number;
        let isNonHypotenuse = true;

        for (let a = 1; a * a < square; a++) {
            const bSquare = square - a * a;
            const b = Math.sqrt(bSquare);

            if (b === Math.floor(b) && b > 0) {
                isNonHypotenuse = false;
                break;
            }
        }

        if (isNonHypotenuse) {
            alert(`${number} является негипотенузным числом`);
        } else {
            alert(`${number} является гипотенузным числом`);
        }
    }
} else {
    alert(`Пожалуйста, введите корректное целое число`);
}