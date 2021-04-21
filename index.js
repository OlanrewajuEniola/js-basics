// Functions for performing a task

function greet() {
    console.log('Hello World');
}

greet();

//Another One

function greet(name){
    console.log('Hello ' + name);
}

greet('Olanrewaju');


//And another one

function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}

greet('Olanrewaju', 'Eniola');

// Calculating a value

function square(number){
    return number * number;
}

console.log(square(3));