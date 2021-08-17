class Car {
  private name: string;
  protected year: number;
  constructor(name: string, year: number) {
    this.name = name;
    this.year = year;
  }

  public getCarName() {
    return this.name
  }
}

class Sedan extends Car {
  constructor(name: string, year: number) {
    super(name, year)
  }

  public getYear() {
    return this.year
  }
}

const honda = new Car('HondaCivic', 2022)
console.log(honda.getCarName())

const skoda = new Car('Rapid', 2000)
console.log(skoda.getCarName())