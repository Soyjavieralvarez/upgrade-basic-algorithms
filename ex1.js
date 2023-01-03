//!Interacción 1. 

let myFavoriteHero = 'Hulk';
let X = 50;
let h = 5;
let y = 10;
let z = 'h' + 'y';

//!Interacción 2.

const character = {name: 'Jack Sparrow', age:10};

let firstName = 'Jon';
let lastName = 'Snow';
let age = 24;

console.log('Soy ' + firstName + lastName + ' tengo ' + age + ' y me gustan los lobos.');

const toy1 = {name: 'Buss myYear', price:19};
const toy2 = {name:'Rallo mcKing', price:29};

console.log('El precio de estos dos juguetes, ' + toy1.name + ' y ' + toy2.name + ' es ' + (toy1.price + toy2.price) + '€.');


//?actualiza el valor de la variable globalBasePrice a 25000.
//?actualizar valor final, baseprice + globalbaseprice


let globalBasePrice = 10000;
globalBasePrice = 25000;

const car1 = {name: 'BMW m&m', basePrice:50000, finalPrice:60000};
const car2 = {name: 'Chevrolet Corbina', basePrice:70000, finalPrice:80000};
console.log(car1.finalPrice = car1.basePrice + globalBasePrice);
console.log(car1.finalPrice = car2.basePrice + globalBasePrice);

//! Interacción 3

let multiplicar = 10*5;
console.log(multiplicar);

let dividir = 10/2;
console.log(dividir);

let resto = 15/9;
console.log(resto);


let x1 = (h+y);
console.log(x1);

let x2 = (h*y);
console.log(x2);

//! Interacción 4

const avengers = ['Hulk', 'Spiderman', 'Black Panther'];
console.log(avengers[0]);

avengers.splice(0,1, 'IronMan');
console.log(avengers);

const avengers1 = ['Hulk', 'Spiderman', 'Black Panter']
console.log(avengers1.length);

const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry'];
rickAndMortyCharacters.push('Morty', 'Summer')
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length -1]);

const rickAndMortyCharacters1 = ['Rick', 'Beth', 'Jerry', 'Morty', 'Summer'];
rickAndMortyCharacters1.pop;
console.log(rickAndMortyCharacters1[0], rickAndMortyCharacters1[rickAndMortyCharacters1.length - 1]);

const rickAndMortyCharacters2 = ['Rick', 'Beth', 'Jerry', 'Morty', 'Summer'];
rickAndMortyCharacters2.splice(1,1)
console.log(rickAndMortyCharacters2);

//!Condicionales

const number1 = 10;
const number2 = 20;
const number3 = 2;

if (number2 / number1 == 2 ){
    console.log('number2 dividido entre number1 es igual a 2')
}

if (number1 !== number2){
    console.log('number 2 es estrictamente distinto a number2')
}

if (number3 !== number1){
    console.log('number 3 es distinto a number1')
}

if (number3*5==number1) {
    console.log('number3 por 5 es igual a number1')
}

if (number3*5==number1 && number1*2==number2) {
    console.log('number 3 por 5 es igual a number1 y number1 por 2 es igual a number2')
}

if (number2 / 2 == number1 || number1 / 5 == number3){
    console.log('number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3')
}

//! Bucles

for (let i = 0; i<=9; i++){
    console.log(i)
}

for (let i = 0; i<=9; i++)
    if (i % 2 === 0) {
        console.log(i)
    }

for (let i = 0; i<=9; i++)
if (i ===9){
    console.log('Dormido')
} else {
    console.log('Intentando dormir')
}
