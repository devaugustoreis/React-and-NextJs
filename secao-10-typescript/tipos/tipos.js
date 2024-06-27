"use strict";
// OBS: POR PADRÃO, O CÓDIGO JS SERÁ GERADO NORMALMENTE MESMO QUE EXISTAM ERROS NO TYPESCRIPT.
// CONTUDO, É POSSÍVEL FAZER UMA MODIFICAÇÃO PARA QUE O CÓDIGO NÃO SEJA COMPILADO NESSES CASOS.
// ======================================================
// TS irá inferir o tipo da variável durante a declaração.
// string
let nome = 'João';
console.log(nome);
// nome = 28 // ERRO
// numbers
let idade = 29;
// idade = 'Ana' // ERRO
idade = 27.5; // number pode ser inteiro ou float
console.log(idade);
// boolean
let hasHobbies = false;
// hasHobbies = 1 // ERRO
console.log(hasHobbies);
// ======================================================
// tipos explícitos
let age; // age será do tipo any, pois a variável foi declarada, mas não inicializada.
age = 29; // age continuará sendo do tipo any no TS.
console.log(typeof age); // No JS, aparacerá como number, por conta do conteúdo.
age = "Augusto";
console.log(typeof age); // E agora aparecerá como string.
// array
let hobbies = ["Programar", "Tocar Teclado"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [1, 2];
// tuplas
// verifica a quantidade, tipos e ordem dos elementos.
let address = ["Rua dos bobos", 0];
// enums
// JS não possui Enum, mas o TS nos fornece esse recurso.
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Red"] = 100] = "Red";
    Color[Color["Purple"] = 101] = "Purple"; // No JS, será 101
})(Color || (Color = {}));
let myColor = Color.Green;
// Como enum não existe no JS, ele irá lidar do seu próprio jeito por debaixo dos panos. Por exemplo, o console.log abaixo irá traduzir a cor em um valor inteiro.
console.log(myColor);
myColor = Color.Red;
console.log(myColor);
myColor = Color.Purple;
console.log(myColor);
// any
let car = 'BMW';
console.log(car);
car = { marca: 'BMW', ano: 2019 };
console.log(car);
