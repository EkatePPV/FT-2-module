/* Напишите исходный код программы, которая считывает единственное
целое число x и проверяет, является ли оно совершенным.
Совершенным называется число, равное сумме всех своих
собственных делителей (отличных от x).
Например: 6 = 1 + 2 + 3; 28 = 1 + 2 + 4 + 7 + 14. */

let x = parseInt(prompt('Введите целое число'));
let del_sum = 0

// В цикле находим сумму делителей
for (let i = 1; i < x; i++) {
    if (x % i === 0) {
        del_sum += i;
    }
}

if (del_sum === x) {
    alert(`${x} - совершенное число`);
} else {
    alert(`${x} - не совершенное число`);
}