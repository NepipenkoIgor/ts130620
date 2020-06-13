/** let/const */

let period = 60;
const baseUrl = 'http://localhost:4200';

/** object */
let firstName = 'Igor';

let account = {
    firstName,
    getName() {
        return this.firstName;
    }
}

/** .... */

let person = {...account};
let dates = [...[11, 12, 15]];


/** dustructoring */

let {firstName: username} = account;
let [firstDate] = dates;

/** template str**/
function userMessage([start, end]: TemplateStringsArray, {firstName: name}: typeof person) {
    return `${start}${name}${end}`
}

console.log(userMessage`Good day, ${person} !!!`);


// let str = '5';
// let n: number  = str as any as number;


/** for of**/
for (const date of dates) {
    console.log(date);
}

/** arrow fn */

let sum = (a: number, b: number) => a + b;

/** class */
class Point {
    private x: number = 10;

    getX() {
        return this.x;
    }
}

/**  Optional chaining */
let user: any = {};
let prop = user?.info?.getSalary();

/*** ?? */
let width = 0;
let w = width ?? 10;

/** includes */
let a = [1, 2, 3].includes(2);
