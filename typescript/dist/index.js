"use strict";
console.log('Hello TS');
let nambo = "Sourav";
console.log(nambo);
let age = 132;
console.log(age);
let kya = "Kuch nahi";
//Union type
let code; //The code either can be a string or be a number
code = "A122B";
code = 123;
//Function
const mul = (n, m) => {
    return (n * m);
};
const addtion = (a, b) => {
    return a * b;
};
console.log(addtion(2, 4));
//Array in TS
// syntax-1
const arr = [12, 23, 32, 12]; //This array only contains numbers
const strArr = ['ysihs', 'kdhd']; //This array only contains string
const anyArr = ['ndkn', 'dugjsb', 87, true];
//syntax-2
const arr2 = [52, 13, 24];
const strArr2 = ['ndkn', 'dugjsb'];
const anyArr2 = ['ndkn', 'dugjsb', 87, true]; //This array contains all type of datatypes. 
console.log(anyArr2);
const obj = {
    name: 'Sourav',
    height: 150,
    weight: 67,
    isBoy: true
};
const obj2 = {
    name: 'Rahul',
    height: 150,
    weight: 67
};
const subrat = {
    name: 'subrat',
    height: 130,
    weight: 77,
    isLoggedIn: false
};
const jijj = {
    name: 'jijj',
    height: 98,
    weight: 988,
    func: (n, m) => {
        console.log(n * m);
    }
};
jijj?.func?.(10, 10); // To call an optional function we use optinal chaining (?.)
