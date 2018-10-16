var Police = require('./Police');
var Person = require('./Person');

var person = new Person('Gonzalo', 'Bahamondez');
var police = new Police('Alonso', 'Olate');

person.sayHello();
person.sayBye();

police.sayHello();
police.shoot();
police.sayBye();

