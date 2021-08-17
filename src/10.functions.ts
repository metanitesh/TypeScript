type AddFunction = (a: number, b: number) => number

export const sub = (a: number, b: number): number => {
  return a - b
}
export const add: AddFunction = (a, b) => a + b


//Overload:

function additionOverload(a: string, b: string): string
function additionOverload(a: number, b: number): number
function additionOverload(a: string | number, b: string | number) {
  if (typeof a === 'string' && typeof b === 'string') {
    return a + b
  }

  if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  }
}

additionOverload('nitesh', 'sharma')

additionOverload(1, 2)
// function additionOverload = (a:string, b:string) => string

// type additionOverload = 
