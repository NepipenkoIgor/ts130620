type User = {
    readonly firstName: string;
    readonly age?: number;
    info: {
        male: boolean
    }
}
//
// const user: User = {
//     firstName: 'Igor',
// }
//
// user.age = 25;
//
//
// let keys: keyof User = 'age';
// let info: User['info'] = {
//     male: true,
// }
//
// let userHash: {
//     [userId: string]: User
// } = {
//     'asdasda124124asfas': {
//         firstName: 'Igor',
//         info: {
//             male: true
//         }
//     }
// }
//
// let user1 =  {
//     firstName: 'Igor',
//     info: {
//         male: true
//     }
// } as const
//
// user1.info.male =  false


let users = [{
    firstName: 'Igor',
    info: {
        male: true
    }
}] as const

users[100] = {
    firstName: 'Igor',
    info: {
        male: true
    }
}
users.push( {
    firstName: 'Igor',
    info: {
        male: true
    }
})

let userSet: readonly [string, User] = ['asda124124asf', {
    firstName: 'Igor',
    info: {
        male: true
    }
}]

userSet[100] = {
    firstName: 'Igor',
    info: {
        male: true
    }
}
userSet.push( {
    firstName: 'Igor',
    info: {
        male: true
    }
})

