// let str: 'fade-in';
//
// let digit: 1 | 2 | 3 | 4 | 5;
// digit = 6;

// export enum AnimationType {
//     FADE_IN,
//     EASE_IN
// }
//
// interface IAnimationOptions {
//     duration: number;
//     type: AnimationType//'fade-in' | 'ease-in';
// }
//
// function animation(_options: IAnimationOptions) {
// }
//
// animation({duration: 1000, type: AnimationType.EASE_IN});
// interface IUser{
//     name: string;
//     age: number;
// }
// let c: keyof IUser = 'asdasd'

interface IFact {
    factId: number;
    userId: number;
    factValue: number;
}

const dataList: { action: string, data: IFact }[] = [];

const uniqueValue = () => {
    return 'factId' as const
}

dataList.map((item) => {
    if (item.data[uniqueValue()] === 2) {

    }
    return item;
})

//let str = 'factId' as const;
const str = 'factId' ;
let a : typeof  str  = 'factId';
