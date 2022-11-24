
let userStatus: 'online' | 'offline' | 'busy' = 'online';


let value: number | string;

value = 1;
value = 'hello';

value = true; // Error


interface Car {
  seat: number
}

interface Truck {
  seat: number,
  load: (amount: number) => void:
}

const myVehicle: Car | Truck = {
  seat: 2,
  load: (amount: number): void => {}
}


function vehiculeFactory(type: 1 | 2): Car | Truck {
  if (type === 1) {
    return {
      seat: 2,
    }
  } else {
    return {
      seat: 2,
      load: (amount: number): void => {}
    }
  }
}

const foo = vehiculeFactory(2);
// myVehicle.seat = 3;
