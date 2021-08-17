"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.val = exports.getVal = void 0;
function getVal() {
    return 10;
}
exports.getVal = getVal;
exports.val = getVal();
if (typeof exports.val === 'number') {
    console.log(exports.val);
}
else if (typeof exports.val === 'string') {
    console.log(exports.val);
}
else {
    //never
    console.log(exports.val);
}
