// T extends U ? X : Y
// let num: number | string | null;
// type noNull<T> = T extends null ? never : T;
// const sn: noNull<typeof num> = true // number| string
//
// let actions: [() => { name: string }, () => boolean] = [() => ({name: 'Ihor'}), () => true]
//
// type FirstType<T> =
//     T extends [infer U, ...unknown[]]
//         ? U extends (...args: any[]) => infer R
//         ? R
//         : U
//         : T
//
// let user: FirstType<typeof actions> = {
//     name: 'asdasd'
// }
//
let a: Exclude<number | string | null, string | number> = 1;

type FnReturnType<T> = T extends (...args: any) => infer R ? R : T;

interface IUser {
    name: string
}
let a: FnReturnType<() => number> = 1;
let b: FnReturnType<() => IUser> =  {
    name: 'Ihor'
};

type TAccount<T> = T extends number ? string : null;
let a: TAccount<string> = 1;


let a: Array
