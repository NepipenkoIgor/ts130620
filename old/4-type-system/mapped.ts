// type AllOptional<obj> = {
//      [key in keyof obj]?: obj[key]
// }
//
// // 'name' | 'age'
// interface IAccount {
//     readonly name?: IAccount['name'],
//     age?: number
// };
//
// let p1: AllOptional<IAccount> = {
//     name: 'Igor',
//     age: 34
// }
// // p1.name = 'Eugen'
// // p1.age = 34
// // let a: Exclude<any, any>
//
//
// let user: IAccount = {
//     name: 'Ihor',
//     age: 34
// }


interface IPerson {
    readonly name: string,
    age: number,
    info: {
        male: boolean
    },
    subjects: string[]
}

type RemoveByType<objType, excludeType> = {
    [key in keyof objType]: excludeType extends objType[key] ? never : key
}[keyof objType]


let p: RemoveByType<IPerson, { male: boolean, salary: number }> = true

interface INewPerson {
    readonly name: 'name',
    age: 'age',
    info: never,
    subjects: 'subject'
}
let key: keyof  INewPerson = 's'
let a: INewPerson[keyof INewPerson] = true

//     {
//     name: 'Ihor',
//     age: 34,
//     info: 1,
//     subjects: ['asd']
// }

// let a: IPerson[keyof IPerson] = true
