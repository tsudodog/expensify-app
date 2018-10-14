// lets say were building a website to sell cars 

// Person

class Person {
    constructor(name = 'Anon', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting(){
       return `Hi I am ${this.name}!`;
    }

    getDescription(){
        return `Name: ${this.name} Age: ${this.age}`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        this.major = major;
    }
    getDescription(){
        let description = super.getDescription();
        return description + ` Major ${this.hasMajor()}`;
    }

}


class Traveler extends Person {
    constructor(name, age, homelocation){
        super(name, age);
        this.homelocation = homelocation;
    }

    getGreeting(){
        let superGreeting = super.getGreeting();
        if(this.homelocation){
            return superGreeting += ` Visiting from ${this.homelocation}`
        }
    }
}







const me = new Person('Alex');
const notMe = new Person();

console.log(me);
console.log(notMe);
console.log(me.getDescription());