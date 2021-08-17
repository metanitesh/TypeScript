"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = exports.sub = void 0;
const sub = (a, b) => {
    return a - b;
};
exports.sub = sub;
const add = (a, b) => a + b;
exports.add = add;
function additionOverload(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
}
additionOverload('nitesh', 'sharma');
additionOverload(1, 2);
// function additionOverload = (a:string, b:string) => string
// type additionOverload = 
