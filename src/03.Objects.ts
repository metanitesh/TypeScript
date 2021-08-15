export type Person = {
  name: string
  age: number
  work?: 'Engineer' | 'Teacher'
}

export const obj: Person = {
  name: 'Nitesh',
  age: 32,
  work: 'Engineer',
  // address: 'Bangalore' //Excess Properties
}

//Index signature: 
export type Animal = {
  [key: string]: string | undefined;
}

const dog: Animal = {
  name: 'Drift',
  hobby: 'Walking'
}

