//literal 
const cNum = 10;
let lNum = 10;
let date: Date;
date = new Date();

const foo = (a, b) => {
  return a + b;
}

const result = foo(10, 20)

//danger of Any
const p = new Promise(result)
p.then(console.log)