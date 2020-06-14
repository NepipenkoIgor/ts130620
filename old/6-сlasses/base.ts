interface IPoint {
    x: number;

    sum(): number;

    onInit(): this
}

class BasePoint implements IPoint {

    #p: number;

    public constructor(
        public readonly x: number,
        protected readonly y: number,
        private readonly z: number,
        p: number,
    ) {
        this.#p = p;
    }

    public onInit(): this {
        console.log(this.#p);
        return this;
    }

    public sum(): number {
        return this.x + this.y
    }
}

class Point extends BasePoint {
    constructor(x: number, y: number, z: number, p: number) {
        super(x, y, z, p);
    }

    public sum(): number {
        // do something;
        return super.sum()
    }
}

let p1 = new BasePoint(1, 2, 2, 2);
let p2 = new Point(1, 2, 2, 3);

// p.p
//     .onInit()
//     .sum();
