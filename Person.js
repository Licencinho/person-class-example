class Person {
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }
    sayHello(){
        console.log('My name is ' + this.name);
    }
}

var person = new Person('Alonso', 'Olate');

person.sayHello();