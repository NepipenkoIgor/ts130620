// class Account {
//     @CheckRuntime
//     public firstName!: string;
//     public age!: number;
// }
//
// const user = new Account();
// user.firstName = 'Ihor';
//
// setTimeout(() => {
//     (user.firstName as any) = 12;
// }, 5000)


import { Validate, Range } from './utils';

class Calculator {
    @Validate
    public updatePercentage(
        @Range(20, 50)  _oldValue: number,
        @Range(50, 70) _newVelue: number
    ) {
    }
}

const calc = new Calculator();
calc.updatePercentage(40, 60);

setTimeout(() => {
    calc.updatePercentage(40, 80);
}, 5000)
