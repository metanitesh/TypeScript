export const a: any = 10;

//allowed
// console.log(a.name.type.value)

export const b: unknown = 10;

if (typeof b === 'number') {
  console.log(b + 10)
}