// 1. Реализуйте функцию для поиска в двух заданных массивах элементов, которые присутствуют в обоих массивах. Используйте Set

function findCommonElements(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return []; 

    const set1 = new Set(arr1);
    return [...new Set(arr2.filter(element => set1.has(element)))]; 
}

console.log("№1");

const arr1 = [1, 2, 2, 3, 3, 3, 4, 5];
const arr2 = [1, 2, 2, 2, 3, 3, 6, 7, 8];
console.log("Массивы:", arr1, arr2);
console.log("Общие элементы: ", findCommonElements(arr1, arr2)); 
console.log(" ");

// 2. Реализуйте функцию, которая подсчитывает количество вхождений каждого элемента в массиве. Используйте Map
function countOccurrences(arr) {
    if (!Array.isArray(arr)) return new Map(); 

    return arr.reduce((occurrences, element) => {
        occurrences.set(element, (occurrences.get(element) || 0) + 1);
        return occurrences;
    }, new Map());
}

console.log("№2");

const a1 = ["a", "b", "a", "c", "b", "a"];
console.log("Массив: ", a1)
console.log(countOccurrences(a1)); 
console.log(" ");

// 3. В массиве студентов подсчитать число обучающихся в самой большой группе. Номер группы – свойство класса Student типа string
class Student {
    constructor(name, group) {
        this.name = name;
        this.group = group;
    }
}

function biggestGroup(students) {
    if (!Array.isArray(students) || students.length === 0) return 0; 

    const groupCounts = new Map();

    for (const student of students) {
        if (typeof student !== "object" || student === null || typeof student.group !== "string") {
            return 0; 
        }
        groupCounts.set(student.group, (groupCounts.get(student.group) || 0) + 1);
    }

    return Math.max(...groupCounts.values(), 0);
}

console.log("№3");

const students = [
    new Student("Петя", "1"),
    new Student("Катя", "2"),
    new Student("Маша", "1"),
    new Student("Артём", "3"),
    new Student("Дима", "2"),
    new Student("Андрей", "1"),
    new Student("Миша", "2"),
    new Student("Катя", "4"),
    new Student("Антон", "3"),
    new Student("Саша", "2")

];
console.log(students);
console.log("Число обучающихся в самой большой группе: ", biggestGroup(students)); 
console.log(" ");
