type Constructable = new (...args: any[]) => any;

function Timestamp<BC extends Constructable>(BC: BC) {
    return class extends BC {
        timestamp = Date.now();
    }
}

function Tagged<BC extends Constructable>(BC: BC) {
    return class extends BC {
        tags = ['ts', 'js', 'node'];
    }
}

class BaseLecture {

}

class Lecture extends Timestamp(Tagged(BaseLecture)) {

}

let lecture = new Lecture();
