
class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log("IN PET CONSTRUCTOR");

    }
    eat() {
        return `${this.name} is eating!`;
    }
}


class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        console.log("IN CAT CONSTRUCTOR");
        super(name, age);
        this.livesLeft = livesLeft;
    }
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