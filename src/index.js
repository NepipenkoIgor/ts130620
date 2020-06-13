"use strict";
/** let/const */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
var period = 60;
var baseUrl = 'http://localhost:4200';
/** object */
var firstName = 'Igor';
var account = {
    firstName: firstName,
    getName: function () {
        return this.firstName;
    }
};
/** .... */
var person = __assign({}, account);
var dates = [11, 12, 15];
/** dustructoring */
var username = account.firstName;
var firstDate = dates[0];
/** template str**/
function userMessage(_a, _b) {
    var start = _a[0], end = _a[1];
    var name = _b.firstName;
    return "" + start + name + end;
}
console.log(userMessage(__makeTemplateObject(["Good day, ", " !!!"], ["Good day, ", " !!!"]), person));
// let str = '5';
// let n: number  = str as any as number;
/** for of**/
for (var _i = 0, dates_1 = dates; _i < dates_1.length; _i++) {
    var date = dates_1[_i];
    console.log(date);
}
/** arrow fn */
var sum = function (a, b) { return a + b; };
/** class */
var Point = /** @class */ (function () {
    function Point() {
        this.x = 10;
    }
    Point.prototype.getX = function () {
        return this.x;
    };
    return Point;
}());
/**  Optional chaining */
var user = {};
var prop = (_a = user === null || user === void 0 ? void 0 : user.info) === null || _a === void 0 ? void 0 : _a.getSalary();
/*** ?? */
var width = 0;
var w = width !== null && width !== void 0 ? width : 10;
/** includes */
var a = [1, 2, 3].includes(2);
