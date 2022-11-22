// let add: (nbr1: number, nbr2: number) => number;
let add = (...numbers: Array<number>) => {
  numbers.reduce((acc, nbr) => {
    acc += nbr;
    return acc;
  }, 0);
}

console.log(add(1, 2, 3, 4));