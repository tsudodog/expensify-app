const square = function (x) {
    return x * x;
}

function squareES5(x){
    return x*x;
}

// const squareArrow = (x) => {
//     return x*x;
// }

const squareArrow = (x) => x*x;

console.log(square(2));
console.log(squareArrow(4))
console.log(squareES5(1))

// Challenge - Use Arrow Functions

const getFirstName = (s) => {
   return s.split(' ')[0];
}

const getFirstNameS = (s) => s.split(' ')[0];

console.log(getFirstName('Mike Smith'))
console.log(getFirstNameS('Mike Smith'))

