const foo: string = 'une string'; 
const bar: number = 5;
const boolean: boolean = false;

const obj: object = new Map() //[] //{ name: 'jean' }
const anything: any = 'une string'; // 5 // false // [] // {}

const myconst: 5 = 5;

const arr: number[] = [1, 2, 3, 4, 5];
const arr2: Array<string> = ['a', 'b', 'c'];

const tuple: [string, number] = ['a', 1];

enum XhrReadyState {
  UNSENT = "voiture",
  OPENED = "moto",
  HEADERS_RECEIVED = 1,
  LOADING = 4,
  DONE = 4,
}


const foo2: null = null;
const bar2: undefined = undefined;

function add(nbr1: number , nbr2: number): void {
  console.log(nbr1 + nbr2);
}

function loop(): never {
  // while(true) {
  //   console.log('hello');
  // }
  throw new Error('error');
}

// let myvar = 'hello';

// myvar = 'world !';

// const myvar2: number = myvar;

let username: any;
username = 'jean';

const nbr: number = (username as string).length;