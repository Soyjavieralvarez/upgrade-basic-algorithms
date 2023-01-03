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
console.log(car1.finalPrice = car1.basePrice + globalBasePrice)
console.log(car1.finalPrice = car2.basePrice + globalBasePrice)


