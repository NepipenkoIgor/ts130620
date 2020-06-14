// function average(a: number, b: number, c: number): string {
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1, 2);
// average(1, 2, 's');
// const avgValue: number = average(1, 2, 2);


// function average(a: number, b?: number, c?: number): string {
//     if (b === undefined) {
//         b = 0;
//     }
//     if (c === undefined) {
//         c = 0;
//     }
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1);
// average(1, 3);
// average(1, 2, 's');
// const avgValue: number = average(1, 2, 2);

// function average(a: number, b: number = 0, c: number = 0): string {
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1);
// average(1, 3);
// average(1, 2, 's');
// const avgValue: number = average(1, 2, 2);

function isString(arg: string | number): arg is string {
    return typeof arg === 'string'
}

function average(a: number, b: string): string;
function average(a: string, b: number): string;
function average(a: number, b: number, c: number): string;
function average(...args: (number | string)[]): string {
    let total: number = 0;
    for (const arg of args) {
        if (isString(arg)) {
            total += parseInt(arg, 10)
            continue;
        }
        total += arg;
    }
    const avg: number = total / args.length;
    return `Average is ${avg}`;
}

average(1, '2');
average('1', 2);
average(1, 2, 1);

average(1);
average(1, 3);
average(1, 2, 's');
average(1, 2, '2', 3, '4', 4);
average(1, 2, 2, '3', 4, 4, 42, 234);
const avgValue: number = average(1, 2, 2);

