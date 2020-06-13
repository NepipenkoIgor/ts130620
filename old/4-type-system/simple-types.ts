let isDone: boolean = true;
isDone = false;

let str: string = 'str';
str = `${str}`;

let num: number = 1.2;
num = NaN;
num = 0b1010;

num.toFixed()

let nill: null = null;
let und: undefined = undefined;


let bigNum: bigint = 4n;

const key1: symbol = Symbol();
const key2: unique symbol = Symbol();
const key3 = Symbol();

let strictObj = {
    [key1]: 100,
    [key2]: 100,
    [key3]: 100,
}

let v1 = strictObj[key1]; // number, string
let v2 = strictObj[key2];
let v3 = strictObj[key3];
