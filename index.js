const studentJSON = {
    surname: "Иванов",
    name: "Иван",
    marks: [
        { subject: "Математика", mark: 5 },
        { subject: "Физика", mark: 4 },
        { subject: "Химия", mark: 4 }
    ]
};

function printStudentInfo(student) {
    console.log(`Фамилия: ${student.surname}`);
    console.log(`Имя: ${student.name}`);
    console.log("Оценки:");
    student.marks.forEach(mark => {
        console.log(` - ${mark.subject}: ${mark.mark}`);
    });
}

printStudentInfo(studentJSON);

class Mark {
    constructor(subject, mark) {
        this.subject = subject;
        this.mark = mark;
    }
}

class Student {
    constructor(surname, name) {
        this.surname = surname;
        this.name = name;
        this.marks = [];
    }

    addMark(subject, mark) {
        const newMark = new Mark(subject, mark);
        this.marks.push(newMark);
    }

    removeMarksBySubject(subject) {
        this.marks = this.marks.filter(mark => mark.subject !== subject);
    }

    getAverageMark() {
        if (this.marks.length === 0) return 0;
        const total = this.marks.reduce((sum, mark) => sum + mark.mark, 0);
        return total / this.marks.length;
    }

    getMarksBySubject(subject) {
        return this.marks.filter(mark => mark.subject === subject);
    }

    printInfo() {
        console.log(`Фамилия: ${this.surname}`);
        console.log(`Имя: ${this.name}`);
        console.log("Оценки:");
        this.marks.forEach(mark => {
            console.log(` - ${mark.subject}: ${mark.mark}`);
        });
    }
}

const student = new Student("Павлов", "Георгий");
student.addMark("Математика", 5);
student.addMark("Математика", 4);
student.addMark("Математика", 5);
student.addMark("Физика", 4);
student.addMark("Физика", 5);
student.addMark("Химия", 3);

student.printInfo();
console.log(`Средняя оценка: ${student.getAverageMark()}`);

console.log("Оценки по физике:", student.getMarksBySubject("Физика"));

student.removeMarksBySubject("Химия");
console.log("Удалены оценки по химии:");
student.printInfo();