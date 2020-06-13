let anyType: any = {};
anyType.a = 1;
anyType.a.b = 1;
anyType = 1;
anyType();

function fn(): never {
    throw new Error();
}


let unkType: unknown = {};
unkType.a = 1;
unkType.a.b = 1;
unkType = 1;
unkType = ()=>{};
unkType();


let v: void = undefined;

function f(): void {

}
