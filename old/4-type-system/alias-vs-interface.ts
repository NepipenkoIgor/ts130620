/** Object**/

// interface IPoint {
//     x: number;
//     y: number;
// }
//
// type TPoint = {
//     x: number;
//     y: number;
// }

/** Function/ Construct **/

// interface ISetPoint {
//     new (x: number, y: number): void;
// }
//
// type TSetPoint = new (x: number, y: number) => void;
//

/** Extends **/
interface IPartialX {
    x: number;
}

type   IPartialY = {
    y: number;
}

type TPoint = IPartialY & IPartialX;

interface IPoint extends IPartialY, IPartialX {

}

/*** Implements*/

class Point implements IPoint {
    public x: number = 1;
    public y: number = 1;
    public z: number = 1;
}

// 1
type snb = string | number | (() => void) ;

//2
interface IPoint {
    z: number;
}
