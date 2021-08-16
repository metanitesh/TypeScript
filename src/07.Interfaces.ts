interface Animal {
  legs: number
}

interface IPerson extends Animal {
  name: string;
  age: number;
}

interface Engineer {
  language: string;
}

class Person implements IPerson, Engineer {
  name: 'Nitesh';
  age: 32;
  legs: 2;
  language: 'Js';
  greet() {
    console.log(this.name)
  }
  constructor() {
  }
}

const nitesh = new Person()

interface IPerson {
  greet: () => void
}
