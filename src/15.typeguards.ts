let value: Date | number | string | boolean | undefined | null | [number] | { dateRange: [Date, Date] }

if (typeof value === 'string') {
  value
} else if (value instanceof Date) {
  value
} else if (Array.isArray(value)) {
  value
}
// } else if ('dateRange' in value) {
//   value
// }

//user defined Type guards
interface CarLike {
  model: string,
  year: number
}

let carLike: unknown

function isCarLike(value: any): value is CarLike {
  return false
}

if (isCarLike(carLike)) {
  carLike
}