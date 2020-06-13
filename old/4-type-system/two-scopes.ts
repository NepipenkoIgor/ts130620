interface IUser {
    name: string;
    age: number;
}


let user = IUser;

let user1 = {
    name: 'Igor',
    age: 34
}

let p1: typeof user1 =  {
    name: 'Igor',
};


class Point {

}

let p: Point = Point;
