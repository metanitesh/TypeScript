"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.outcome = void 0;
function flipCoin() {
    if (Math.random() > 0.5) {
        return 'success';
    }
    return 'error';
}
const value = flipCoin();
function maybeGetTheUser() {
    if (flipCoin() === 'success') {
        return ['success', {
                name: 'Nitesh',
                email: 'nitesh@gmail.com'
            }];
    }
    return ['error', new Error('Coin failed')];
}
exports.outcome = maybeGetTheUser();
// if (second instanceof Error) {
//   console.log(second)
// } else {
//   console.log(second.email)
// }
if (exports.outcome[0] === 'success') {
    console.log(exports.outcome);
}
