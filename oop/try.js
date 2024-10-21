class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    move() {
        console.log('mo ' + this.name);
    }
}

class Information extends Person {
    constructor(name, length, weight, age) {
        super(name, age);
        this.length = length;
        this.weight = weight;
    }
}

let person1 = new Information('John', 188, 82, 18);
console.log(person1);
