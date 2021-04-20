// Objects

let name = 'Ola';
let age = 48;

// We can write this way to make our code cleaner
let person = {
    name: 'Ola',
    age: 48
};

// Dot notation
person.name = 'Ruth';

//Bracket notation
person['name'] = 'Mary';

let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);