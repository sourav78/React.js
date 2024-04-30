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
const theme = "dark"; // In this type we can only specify 2 value either dark || light
// const theme1: themeMode = "orange" // It produce an error because 'orange' is not an option in themeMode
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
const newFunc = (n, m) => {
    return n * m;
};
console.log(newFunc(12, 2));
const func2 = (n, m, l) => {
    if (typeof (l) === 'undefined')
        return n * m; //use type guard to check l is undefined or not
    return n * m * l;
};
console.log(func2(2, 3, 3));
const func3 = (n, m, l = 20) => {
    return n * m * l;
};
console.log(func3(2, 3));
//Default parameter - 2
const func4 = (n, m, l = 20) => {
    return n * m * l;
};
console.log(func4(5, 5, 2));
//Rest parameter
const restFunc = (...n) => {
    return n;
};
console.log(restFunc(5, 5, 2));
const restFunc2 = (...n) => {
    return n.reduce((acc, curr) => acc + curr);
};
console.log(restFunc2(5, 5, 2, 7, 9));
const getData = (product) => {
    product.name = "Camera";
    // product.id = "ABD22" // We can not change the readonly property :)
    console.log(product);
};
const productOne = {
    name: 'Mobile',
    stock: 200,
    price: 12000,
    photo: 'one photo',
    id: 'ABS12'
};
getData(productOne);
//Never type
const errorHandler = () => {
    // return new Error() //When i return the error it type is Error type
    throw new Error(); // But when i throw a error its type is never So i specify its type as never
};
// ------------------------------------------------------------------------------------------------------
//Classes in TS
class Player {
    constructor(height, weight, power) {
        this.getHeight = () => {
            return this.height;
        };
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.id = String(Math.ceil(Math.random() * 100000));
    }
}
class Player2 extends Player {
    constructor(height, weight, power) {
        super(height, weight, power);
        this.getPower = () => {
            return this.power;
        };
    }
}
const julu = new Player2(150, 78, 90);
console.log(julu.getHeight());
console.log(julu.weight);
console.log(julu.getPower());
console.log(julu.id);
//Geter and seter function
class Employee {
    constructor(salary) {
        this.salary = salary;
        this.id = String(Math.ceil(Math.random() * 100000));
    }
    get employeeSalary() {
        return this.salary;
    }
    set setEmployeeSalary(salary) {
        this.salary = salary;
    }
}
const sourav = new Employee(30000);
console.log(sourav.employeeSalary);
sourav.setEmployeeSalary = 50000;
console.log(sourav.employeeSalary);
//Type Assertion
//Syntax-1
// const btn = document.getElementById('#btn') as HTMLElement
//syntax-2
// const btn = <HTMLElement> document.getElementById('#btn')
//syntax-3
const btn = document.getElementById('#btn');
// btn.onclick;
const image = document.getElementById('myimg');
image.src = "https://pexels.com/v=hnjd8dhe7";
const form = document.getElementById('myform');
const myInput = document.querySelector("form > input");
const num = document.getElementById("num");
form.onsubmit = (e) => {
    e.preventDefault();
    const value = Number(myInput.value);
    console.log(value);
    console.log(typeof value);
    num.style.color = "white";
    num.innerText = (value + 20).toString();
};
const myObj = {
    name: "sourav",
    email: "sourav@gmail.com"
};
const getName = () => {
    return myObj['name'];
};
const getEmail = () => {
    return myObj['email'];
};
const getField = (key) => {
    return myObj[key];
};
console.log(getField('email'));
