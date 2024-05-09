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




// ------------------------------------------------------------------------------------------------------



//Classes in TS

class Player{
    private height;
    public weight;
    protected power;
    readonly id: string;

    constructor(height: number, weight:number, power: number){
        this.height = height
        this.weight = weight
        this.power = power
        this.id = String(Math.ceil(Math.random()*100000))
    }

    getHeight = () => {
        return this.height
    }
}

class Player2 extends Player{
    constructor(height: number, weight:number, power: number){
        super(height, weight, power)
    }

    getPower = () => {
        return this.power
    }
}

const julu = new Player2(150, 78, 90)
console.log(julu.getHeight());
console.log(julu.weight);
console.log(julu.getPower());
console.log(julu.id);

//Geter and seter function

class Employee{
    private salary: number;
    readonly id: string;

    constructor(salary: number){
        this.salary = salary
        this.id = String(Math.ceil(Math.random()*100000))
    }

    get employeeSalary(): number {
        return this.salary
    }

    set setEmployeeSalary(salary: number) {
        this.salary = salary
    }
}

const sourav = new Employee(30000)
console.log(sourav.employeeSalary);
sourav.setEmployeeSalary = 50000;
console.log(sourav.employeeSalary);




//Type Assertion

//Syntax-1
// const btn = document.getElementById('#btn') as HTMLElement

//syntax-2
// const btn = <HTMLElement> document.getElementById('#btn')

//syntax-3
const btn = document.getElementById('#btn')!

// btn.onclick;

const image = document.getElementById('myimg') as HTMLImageElement

image.src = "https://pexels.com/v=hnjd8dhe7"

const form = document.getElementById('myform') as HTMLFormElement

const myInput = document.querySelector("form > input") as HTMLInputElement
const num = document.getElementById("num") as HTMLParagraphElement


form.onsubmit = (e: SubmitEvent) => {
    e.preventDefault()
    const value = Number(myInput.value)
    console.log(value);
    console.log(typeof value);
    num.style.color = "white"
    num.innerText = (value+20).toString()
    
}



// interface Person{
//     [key: string] : string
// }
interface Person{
    name: string,
    email: string
}

const myObj: Person = {
    name: "sourav",
    email: "sourav@gmail.com"
}

const getName = ():string => {
    return myObj['name']
}

const getEmail = ():string => {
    return myObj['email']
}

const getField = (key: keyof Person):string => {
    return myObj[key]
}

console.log(getField('email'));



//--------------------------------------------

//Utility Type

//1. Partials<Type> -> Constructs a type with all properties of Type set to optional.

type store = {
    name: string,
    stock: number,
    price: number
}

type wholeSale = Partial<store>  //Now all the property of wholesale is set be optinal


//2. Required<Type> -> Make a type consisting of all properties of Type set to required. The opposite of Partial.

interface store2 {
    name: string,
    stock?: number,
    price?: number
}

interface wholeSale2 extends Required<store2>{}

const prod1:store2 = {
    name: 'Mobile',
    stock: 12
}

// const prod2:wholeSale2 = { // This object gives us error because all the properties of whileSale2 is set to required field.
//     name: 'Laptop',
//     stock: 23,
// }


//3. Readonly<Type> -> all properties of Type set to readonly.

type store3 = {
    name: string,
    stock: number,
    price: number
}

const prod3:Readonly<store3> = {
    name: 'Mobile',
    stock: 12,
    price: 2300
}

// prod3.price = 1200  //Now if reassign a property it gives us error because we it to readonly.


//4.Record<Keys, Type> -> 

type store4 = Record<'name' | 'stock' | 'price', string>

//example ->
interface carBarnd{
    brand: string
}

type cars = 'GTR' | 'Supra' | 'Urus'

const cars:Record<cars, carBarnd> = {
    GTR:{brand: 'Nissan'},
    Supra:{brand: 'Toyota'},
    Urus:{brand: 'Lambrogini'}
}


//5. Pick<Type, Keys> -> It is use to make a type from picking the set of prperties form other type

interface orderInfo{
    readonly id: string,
    user: string,
    city: string,
    state: string,
    country: string,
    stutus: string,
}

type shipingInfo = Pick<orderInfo, 'city' | 'state' | 'country'>


//6. Omit<Type, Keys> -> Constructs a type by picking all properties from Type and then removing Keys.

interface orderInfo2{
    readonly id: string,
    user: string,
    city: string,
    state: string,
    country: string,
    stutus: string,
}

type orderStatus = Omit<orderInfo2, 'city' | 'state' | 'country'> // Omit remove the city, state and country from oderInfo2 and make a new type


//7. Exclude<UnionType, ExcludedMembers> -> Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers

type members = string | number | boolean | null | undefined

type members1 = Exclude<members, boolean | undefined>

//8. Extract<Type, Union> -> Constructs a type by extracting from Type all union members that are assignable to Union.

type members2 = Extract<members, string | null>

//9. NonNullable<Type> -> Constructs a type by excluding null and undefined from Type.

type nonNullableMembers = NonNullable<members>


//10. Parameters<Type> -> Constructs a tuple type from the types used in the parameters of a function type Type.

const myFunc = (a:number, b:number) => {
    return a+b
}

type funcParams = Parameters<typeof myFunc> // [a: number, b: number]

//11. ReturnType<Type> -> Constructs a type consisting of the return type of function Type.

type funcReturnType = ReturnType<typeof myFunc>