"use strict";
// interrogação indica que o atributo é opcional.
// colchetes indicam atributo com nome dinâmico.
function greet(person) {
    console.log("Hi, ", person.name);
}
function changeName(person) {
    person.name = 'Ana';
}
const person = {
    name: "Augusto",
    age: 29,
    salute(lastName) {
        console.log(`My full name is ${this.name} ${lastName}`);
    }
};
greet(person);
changeName(person);
greet(person);
// greet({ name: 'Pedro', age: 25, xyz: true})
person.salute("Santos");
// Usando Classes
class Client {
    constructor() {
        this.name = "";
        this.lastPurchase = new Date();
    }
    salute(lastName) {
        console.log(`My full name is ${this.name} ${lastName}`);
    }
}
const myClient = new Client();
myClient.name = "João";
greet(myClient);
myClient.salute("Silva");
console.log(myClient.lastPurchase);
let potencia;
potencia = function (base, exp) {
    // return Array(exp).fill(base).reduce((t, a) => t * a)
    // return Math.pow(2, 8)
    return base ** exp;
};
console.log(potencia(2, 9));
