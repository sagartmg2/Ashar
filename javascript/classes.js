



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
}

let dog1 = new Dog("germna...", "brown", "barking", true);

// console.log(animal_1.soundd());
// animal_1.soundd()
console.log(dog1);
dog1.makeSound();

// inheritence
// encapsulation
// polymorphism
// absction

