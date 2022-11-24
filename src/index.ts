interface Bird {
  fly: () => void;
}

interface Whale {
  swim: () => void;
}


function isBird(x: Whale | Bird): x is Bird {
  return (x as Bird).fly !== undefined;
}

function move(animal: Bird | Whale) {
  if(isBird(animal)) {
    animal.fly();
  } else {
    animal.swim();
  }
}

// function move(animal: Bird | Whale) {
//   if('fly' in animal) {
//     animal.fly();
//   } else {
//     animal.swim();
//   }
// }

function foo(a: string | number) {
  if (typeof a === 'string') {
    a
  } 
}

class A {
  getA(){}
}

class B {
  getB(){}
}

// const a = new A();
// const b = new B();

// function bar(a: A | B) {
//   if (a instanceof A) {
//     a.getA();
//   } else {
//     a.getB();
//   }
// }

// interface User {
//   username: string,
// }

// interface Moderator {
//   deleteMessage: () => void,
//   editMessage: () => void,
// }

// interface AddContent {
//   addMessage: () => void,
// }

// // interface BasisUser extends User, AddContent {}
// // interface Admin extends User, Moderator, AddContent {}
// const newUser: User & AddContent = {
//   username: 'John',
//   addMessage: () => {},
// }

// const admin: User & Moderator & AddContent = {
//   username: 'John',
//   deleteMessage: () => {},
//   editMessage: () => {},
//   addMessage: () => {},
// }


// type customModulos = 1 | 2 | 3;

// type ObjectId = string;

// type User = {
//   username: string,
//   age: number,
//   address?: {
//     city: string,

//   }
// }

// const myUser: User = {
//   username: 'John',
//   age: 20,
// }

// const city = myUser.address?.city;

// const username = myUser.username || 'guest';

type UserStatusType = 'online' | 'offline' | 'busy';
type CustomModulos = 1 | 2 | 3;


let userStatus: UserStatusType = 'online';

function getUserStatus(user): UserStatusType {
  return userStatus;
}

type ObjectId = string;


type User = {
  username: string;
  age: number;
  id: ObjectId;
  
}

const newUser: User = {
  username: 'John',
  age: 20,
  id: '123',
}

type Alias = { nombre: number };
interface Interface {
  nombre: number;
}

let a: Alias = {nombre: true};
let b: Interface = {nombre: 2};