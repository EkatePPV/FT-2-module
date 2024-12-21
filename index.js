// №1
const findTwoMax = (x, y, z) => {
    const firstMax = Math.max(x, y, z);
    const secondMax = Math.max(x === firstMax ? -Infinity : x, y === firstMax ? -Infinity : y, z === firstMax ? -Infinity : z);
    return firstMax * secondMax;
};

let num1 = parseInt(prompt('Задание 1\nВведите первое число'));
let num2 = parseInt(prompt('Введите второе число'));
let num3 = parseInt(prompt('Введите третье число'));
alert(`Произведение двух наибольших чисел: ` + findTwoMax(num1, num2, num3));

// №2
const greetUser = (userName, userRank = "рядовой") => `Здравствуйте, ${userRank} ${userName}`;

alert(greetUser("Алексей"));
alert(greetUser("Дмитрий", "сержант")); 

// №3
const executeFunction = (fn, ...params) => fn(...params);

const abFunction = (a, b) => 2*a + (3*b)/a;

alert(`Результат функции 2*a+(3*b)/a при a=2, b=1 : ` + executeFunction(abFunction, 2, 1));

// №4
const powerFuncCreator = (value) => value % 2 === 0 ? (num) => num ** 2 : (num) => num ** 3;

const userInput = prompt("Задание 4\nВведите целое число:");
const parsedNumber = parseInt(userInput, 10);
if (!isNaN(parsedNumber)) {
    const powerFunc = powerFuncCreator(parsedNumber);
    const output = powerFunc(parsedNumber); 
    alert(`Результат: ${output}`);
} else {
    alert(`Пожалуйста, введите корректное целое число`);
}

// №5
const calculateFactorial = (n) => {
    if (n < 0) return undefined; 
    if (n === 0) return 1;
    return n * calculateFactorial(n - 1);
};

let factorialInput = parseInt(prompt('Задание 5\nВведите число для вычисления факториала'));
alert(`Факториал числа ${factorialInput}: ${calculateFactorial(factorialInput)}`);