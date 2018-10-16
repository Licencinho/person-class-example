class Person {
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }
    sayHello(){
        console.log('My name is ' + this.name);
    }

    sayBye(){
        console.log('Bye');
    }
}

module.exports = Person;