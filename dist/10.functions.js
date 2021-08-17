export const sub = (a, b) => {
    return a - b;
};
export const add = (a, b) => a + b;
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
