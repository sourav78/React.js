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

type funcType = (n:number, m:number) => number

const addtion:funcType = (a, b) => {
    return a*b;
}

console.log(addtion(2, 4));


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
