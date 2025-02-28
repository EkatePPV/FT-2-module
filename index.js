// 1. Алгоритм сортировки Шелла для массива студентов по их средней оценке

class Student {
    constructor(firstName, lastName, avgScore) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.avgScore = avgScore;
    }
}

function shellSortStudents(students) {
    if (!Array.isArray(students)) return []; 

    const length = students.length;
    let interval = Math.floor(length / 2);

    while (interval > 0) {
        for (let i = interval; i < length; i++) {
            const current = students[i];
            let pos = i;

            while (pos >= interval && students[pos - interval].avgScore < current.avgScore) {
                students[pos] = students[pos - interval];
                pos -= interval;
            }
            students[pos] = current;
        }
        interval = Math.floor(interval / 2);
    }
    return students;
}

const studentList = [
    new Student("Александр", "Смирнов", 4.7),
    new Student("Мария", "Кузнецова", 3.9),
    new Student("Николай", "Петров", 4.5),
    new Student("Светлана", "Иванова", 4.1),
    new Student("Антон", "Сидоров", 3.6),
    new Student("Ольга", "Морозова", 4.8),
    new Student("Денис", "Васильев", 3.2),
    new Student("Ксения", "Федорова", 4.0),
    new Student("Роман", "Ковалев", 4.3),
    new Student("Екатерина", "Лебедева", 3.7),
    new Student("Станислав", "Александров", 4.6),
    new Student("Татьяна", "Соловьёва", 3.8),
    new Student("Владимир", "Григорьев", 4.2),
    new Student("Ирина", "Николаева", 3.4),
    new Student("Павел", "Зайцев", 4.1)
];

console.log("Упорядоченный список студентов по средним оценкам: "); 
const sortedStudents = shellSortStudents(studentList);
sortedStudents.forEach(student => console.log(`${student.firstName} ${student.lastName}: ${student.avgScore}`));