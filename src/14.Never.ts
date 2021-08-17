export function getVal() {
  return 10
}
export let val: string | number = getVal();

if (typeof val === 'number') {
  console.log(val)
} else if (typeof val === 'string') {
  console.log(val)
} else {
  //never
  console.log(val)
}
