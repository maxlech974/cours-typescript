abstract class Engine {
  constructor(private type: string) {

  }
 
  abstract stopEngine(): void;
}

class Vehicule extends Engine {
  wheel= 4;
  protected brand: string;

  constructor(brand: string) {
    super('V8');
    this.brand = brand;
  }
}


class Voiture extends Vehicule {
  static className = "Véhicule";
  private maxSpeed: number = 100;
  readonly airbag: boolean = true;

  static startCar() {
    console.log('car start')
  }

  faster(newSpeed: number): void {
    if(newSpeed <= this.maxSpeed) {
      this.speed = newSpeed;
    }
  }
  move() {
    console.log('car move')
  }

  stop() {
    console.log('car stop')
  }

  changeBrand(newBrand: string): void {
    this.brand = newBrand;
  }


  constructor (public speed: number, brand: string) {
    super(brand);
    this.speed = speed;
  }

  stopEngine(): void {
    console.log('stop engine')
  }
}

let car: Voiture;

car = new Voiture(300, 'BMW');
// car.changeBrand('Peugeot');
console.log(car);
console.log(Voiture.className);
console.log(Voiture.startCar());



console.log(car.wheel);