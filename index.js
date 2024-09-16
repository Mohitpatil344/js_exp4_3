class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Student extends Person {
    constructor(name, age, rollNo) {
        super(name, age);

        if (rollNo <= 0) {
            throw new Error('Invalid roll number. Roll number must be greater than zero.');
        }
        this.rollNo = rollNo;
    }

    displayInfo() {
        // override the parent class's displayInfo() method usign super 
        return `${super.displayInfo()}, Roll No: ${this.rollNo}`;
    }
}

try {
    const person = new Person('Mohit', 19);
    console.log(person.displayInfo());

    const student = new Student('Atharva', 20, 12);
    console.log(student.displayInfo());

    const invalidStudent = new Student('Rohan', 22, 0);
    console.log(invalidStudent.displayInfo());
} catch (error) {
    console.error(`Error: ${error.message}`);
}
