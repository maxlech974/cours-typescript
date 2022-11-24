var _a;
function isBird(x) {
    return x.fly !== undefined;
}
function move(animal) {
    if (isBird(animal)) {
        animal.fly();
    }
    else {
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
function foo(a) {
    if (typeof a === 'string') {
        a;
    }
}
class A {
    getA() { }
}
class B {
    getB() { }
}
const a = new A();
const b = new B();
function bar(a) {
    if (a instanceof A) {
        a.getA();
    }
    else {
        a.getB();
    }
}
const myUser = {
    username: 'John',
    age: 20,
};
const city = (_a = myUser.address) === null || _a === void 0 ? void 0 : _a.city;
console.log(city);
