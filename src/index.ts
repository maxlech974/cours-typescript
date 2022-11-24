const arr: Array<string> = ['pomme', 'fraise', 'tomate'];

const fruit = arr[0];

interface User  {
  username: string;
}

const promise: Promise<User> = new Promise((resolve, reject) => {
  resolve({
    username: 'toto',
  });
});

promise.then((res) => {
  
})


interface Car {
  speed: number;
}

const newCar: Car = {
  speed: 50,
}

interface Fruit {
  name: string;
  price: number;
}

const newFruit: Fruit = {
  name: 'banane',
  price: 1,
}

// function addItemToCollection(item: Fruit, collection: Fruit[]): Fruit[];
// function addItemToCollection(item: Car, collection: Car[]): Car[];
// function addItemToCollection (item: object, collection: object[]): object[] {
//   return [...collection, item];
// }

// function addItemToCollection<T>(item: T, collection: T[]): T[] {
//   return [...collection, item];
// }

interface AddItemFunction {
  <T>(item: T, collection: T[]): T[];
}
const addItemToCollection: AddItemFunction = <T>(item: T, collection: T[]): T[] => {
  return [...collection, item];
}


const myFruits = addItemToCollection(newFruit, []);
const myCars = addItemToCollection(newCar, []);

console.log(myFruits[0].price);
console.log(myCars[0].speed);

class Stack <T> {
  items: T[] = [];
  push(item: T): void {
    this.items.push(item);
  }

  pop(): T {
    return this.items.pop();
  }

  display(): void {
    console.log(this.items);
  }

}

const stackNumber = new Stack<number>();
stackNumber.push(1);
stackNumber.display();
stackNumber.push(2);
stackNumber.display();
const myMynumber = stackNumber.pop();
stackNumber.display();

console.log(myMynumber);

const stackString = new Stack<string>();
stackString.push('hello');
stackString.display();
stackString.push('world');
stackString.display();
const myStackString = stackString.pop();
stackString.display();

console.log(myStackString);


interface Name {
  name: string;
}


function displayName <T extends Name> (object: T): void {
  console.log(object.name);
}

function dispalyProp <T, U extends keyof T> (object: T, prop: U): void {
  console.log(object[prop]);
}

dispalyProp({price: '50'}, 'price');

// const newUser: Readonly<User> = {
//   username: 'jean',
// }

function editUser(user: User, editedUser: Partial<User>) {
  return {
    ...user,
    ...editedUser,
  }
}

// editUser(newUser, { age: 15 });

interface Page {
  title: string;

}

// interface Pages {
//   [pages: string]: Page;
// }

type PageType = 'home' | 'about' | 'contact';

const pages: Record<PageType, Page> = {
  home: {
    title: 'homepage'
  },
  about: {
    title: 'abou'
  },
  contact: {
    title: 'contact'
  },
};


interface User {
  username: string;
  age: number;
  address: {
    city: string;
  
  }
}

// // type LightUser = Pick<User, 'username' | 'age'>;
type LightUser = Omit<User, 'address'>;

// const newUser: User = {
//   username: 'jean',
//   age: 12,
//   address: {
//     city: 'Paris',
//   },
// }
