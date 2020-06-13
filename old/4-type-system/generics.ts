// interface, types, fn, class
// interface IInfo {
//     male: boolean
// }
//
// interface IAccount<Info extends IInfo, ID = number> {
//     id: ID;
//     name: string;
//     info: Info;
// }
//
// let user: IAccount<{ male: boolean }> = {
//     id: 1,
//     name: 'Igor',
//     info: {
//         male: true
//     }
// }
// type IAdminInfo = IInfo & { subject: string[] };
// let admin: IAccount<IAdminInfo, string> = {
//     id: 'asdasd123123',
//     name: 'Igor',
//     info: {
//         male: true,
//         subject: ['ts', 'js']
//     }
// }

interface IUser {
    name: string;
    age: number;
}

interface IProduct {
    id: number;
    name: string;
    price: number;
}

interface ICartProduct {
    id: number;
    count: number;
}

type TState = {
    user: IUser,
    products: IProduct[],
    cart: ICartProduct[],
}

type Select<State> = <T extends keyof State>(state: State, field: T) => State[T]

const state: TState = {
    user: {name: 'Ihor', age: 34},
    products: [{id: 1, name: 'IPhone XR', price: 300}],
    cart: [{id: 1, count: 2}]
}

const select: Select<TState> = (storeState, field) => storeState[field];
const user: IUser = select(state, 'user');
const products: IProduct[] = select(state, 'products');
const cart: ICartProduct[] = select(state, 'cart');
