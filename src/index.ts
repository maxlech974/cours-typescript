
interface User {
  readonly username: string;
  age: number;
  isDrinking?: boolean;
  isHealthy?: boolean;
  isSmoking?: boolean;
  [propName: number]: any;
  [propName: string]: any;
}

interface CollectionUser {
  [x: string]: User;
}


const ids: readonly string[] = ['1', '2', '3'];

const user: User = {
  username: 'John',
  age: 30,
  isDrinking: true,
  isSmoking: true,
  isHealthy: false
}


const newUser: User = {
  username: 'John',
  age: 30,
  0: true,
  1: false,
  isOnline: true
}
 
function greet (user: { username: string}): void {
  console.log(`Hello ${user.username}!`);
}



function death (user: User) {}

function goodShape (user: User) {}

greet(user);

let func: (param: string) => number;

interface MyFunc {
  (param: string): number;
}

const func2: MyFunc = (x: string) => {
  return 0;
}

interface Vehicule {
  name: string;
  drive: () => void;
}

interface Engine {
  type: string
}

// interface Car extends Vehicule, Engine {
//   wheels: number;

// }

class Car implements Vehicule, Engine {
  drive() {}
  constructor(public name: string, public type: string, public wheels: number) {}

}

const newCar: Car = {
  name: 'Zoe',
  wheels: 4,
  type: 'electric',
  drive: () => {}
}
