



let car1 = {
    name: "car 1",
    color: "red",
    drive: function () {
        console.log("driving....")
    }
}

let car2 = {
    name: "car 2",
    color: "black",
    drive: function () {
        console.log("driving....")
    }
}


function Car(name, color) {
    this.name = name
    this.color = color
    // this.drive = function () {
    //     console.log("driving......");
    // }
}

Car.prototype.drive = () => {
    console.log("driving...");
}


let car3 = new Car("tesla", "red");
let car4 = new Car("tesla", "red");



// let pc1 = new PC("black",)

// console.log(car1);
console.log(car3);
// console.log(car4);
// car3.drive()

// OOP

class Animal {
    constructor(name, color, sound) {
        this.color = color;
        this.name = name;
        this.sound = sound;
    }
    makeSound() {
        // console.log("" + JSON.stringify(this));
        console.log("makeing sound..");
    }
}

let animal_1 = new Animal("dog", "black", "barking")
let animal_2 = new Animal("cat", "black", "meow")


class Dog extends Animal {
    constructor(name, color, sound, is_loyal) {
        super(name, color, sound)
        this.is_loyal = is_loyal
    }

    makeSound(sound) {
        console.log("unique to dog only ");
    }
}

let dog1 = new Dog("germna...", "brown", "barking", true);

// console.log(animal_1.soundd());
// animal_1.soundd()
// dog1.color = "red"
// console.log(dog1);
// dog1.makeSound();
// dog1.makeSound("barking");


class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
        // this.bonus = 500
    }

    #bonus = 500;

    // setter and getter methods
    setBonus(num) {
        this.#bonus = num
    }

    calculateInterest() {
        return this.salary * 0.1;
    }

    calculateSalary() {
        console.log(this.#bonus + this.salary + this.calculateInterest())
    }
}

const emp1 = new Employee("john", 1000)
// emp1["#bonus"] = 50000;
emp1.setBonus(4000)
emp1.calculateSalary()
console.log(emp1)
// console.log(emp1.#bonus);

// inheritence
// encapsulation
// polymorphism
// absction

