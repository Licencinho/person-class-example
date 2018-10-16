var Person = require('./Person');

class Police extends Person {
    constructor(name, lastName){
        super(name, lastName);
    }
    shoot(){
        console.log('My name is ' + this.name + ' and I kill you!');
    }
}

module.exports = Police;