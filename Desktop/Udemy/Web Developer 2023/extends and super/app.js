
class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
}


class Cat extends Pet {
    meow () {
        return "MEOWWWWWW!!";
    }
}

class Dog extends Pet {
    bark () {
        return "WOOOOOF!!";
    }
    eat() {
        return `${this.name} scarfs his food`
    }
}