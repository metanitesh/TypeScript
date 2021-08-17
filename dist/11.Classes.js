class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    getCarName() {
        return this.name;
    }
}
class Sedan extends Car {
    constructor(name, year) {
        super(name, year);
    }
    getYear() {
        return this.year;
    }
}
const honda = new Car('HondaCivic', 2022);
console.log(honda.getCarName());
const skoda = new Car('Rapid', 2000);
console.log(skoda.getCarName());
