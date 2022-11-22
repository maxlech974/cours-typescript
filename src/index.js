var user = {
    username: 'John',
    age: 30,
    isDrinking: true,
    isSmoking: true,
    isHealthy: false
};
function greet(user) {
    console.log("Hello ".concat(user.username, "!"));
}
function death(user) { }
function goodShape(user) { }
greet(user);
