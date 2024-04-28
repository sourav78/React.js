console.log('Hello TS');

let nambo: string = "Sourav";
console.log(nambo);

let age: number = 132
console.log(age);


let kya = <string>"Kuch nahi";


//Union type

let code: string | number; //The code either can be a string or be a number

code = "A122B";
code = 123;


//Function

const mul = (n: number, m: number): number => { //This return type is assigned to a number. This function onlu return Number

    return (n * m);
}


//Type  keyword

type funcType = (n: number, m: number) => number

const addtion: funcType = (a, b) => {
    return a * b;
}

console.log(addtion(2, 4));




//Optioning Type

type themeMode = "dark" | "light"

const theme: themeMode = "dark" // In this type we can only specify 2 value either dark || light
// const theme1: themeMode = "orange" // It produce an error because 'orange' is not an option in themeMode




//Array in TS

// syntax-1

const arr: number[] = [12, 23, 32, 12]  //This array only contains numbers
const strArr: string[] = ['ysihs', 'kdhd'] //This array only contains string
const anyArr: any[] = ['ndkn', 'dugjsb', 87, true];

//syntax-2

const arr2: Array<number> = [52, 13, 24];
const strArr2: Array<string> = ['ndkn', 'dugjsb'];
const anyArr2: Array<any> = ['ndkn', 'dugjsb', 87, true]; //This array contains all type of datatypes. 
console.log(anyArr2);



//Objects in TS

type OBJ = {
    name: string
    height: number,
    weight: number,
    isBoy?: boolean //Making the isBoy property optional
}


const obj: OBJ = {
    name: 'Sourav',
    height: 150,
    weight: 67,
    isBoy: true
}

const obj2: OBJ = {
    name: 'Rahul',
    height: 150,
    weight: 67
}

interface interfaceOBJ {
    name: string
    height: number,
    weight: number,
    isBoy?: boolean //Making the isBoy property optional
}

type FType = (n: number, m: number) => void

interface newIntObj extends interfaceOBJ {   //We can inherit one interface property to another one
    isLoggedIn?: boolean
    func?: FType
}

const subrat: newIntObj = {
    name: 'subrat',
    height: 130,
    weight: 77,
    isLoggedIn: false
}

const jijj: newIntObj = {
    name: 'jijj',
    height: 98,
    weight: 988,
    func: (n, m) => {
        console.log(n * m);
    }
}

jijj?.func?.(10, 10); // To call an optional function we use optinal chaining (?.)


//Functions in TS

type FuncType = (n: number, m: number) => number

const newFunc: FuncType = (n, m) => {
    return n * m;
}

console.log(newFunc(12, 2));


//Optinal parameter

type FuncType2 = (n: number, m: number, l?: number) => number

const func2: FuncType2 = (n, m, l) => {

    if (typeof (l) === 'undefined') return n * m   //use type guard to check l is undefined or not

    return n * m * l;
}

console.log(func2(2, 3, 3));


//Default parameter

type FuncType3 = (n: number, m: number, l?: number) => number

const func3: FuncType2 = (n, m, l = 20) => {

    return n * m * l;
}

console.log(func3(2, 3));

//Default parameter - 2

const func4 = (n: number, m: number, l: number = 20) => { //IN this case don't need to declare as optional

    return n * m * l;
}

console.log(func4(5, 5, 2));


//Rest parameter

const restFunc = (...n:number[]) => {
    return n;
}

console.log(restFunc(5, 5, 2));

//with type

type restType = (...n:number[]) => number

const restFunc2:restType = (...n) => {
    return n.reduce((acc, curr) => acc+curr);
}

console.log(restFunc2(5, 5, 2, 7, 9));



//Function with object

//Readonly**

interface productType {
    name: string,
    stock: number,
    price: number,
    photo: string
    readonly id: string
}

type getDataType = (product:productType) => void

const getData:getDataType = (product) => {
    product.name = "Camera"
    // product.id = "ABD22" // We can not change the readonly property :)
    console.log(product);
}

const productOne:productType = {
    name: 'Mobile',
    stock: 200,
    price: 12000,
    photo: 'one photo',
    id: 'ABS12'
}

getData(productOne)



//Never type

const errorHandler = (): never => {
    // return new Error() //When i return the error it type is Error type
    throw new Error()  // But when i throw a error its type is never So i specify its type as never
}