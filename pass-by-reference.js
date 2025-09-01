// primitive values are passed by value
function multiply(x, y) {
    x = x + 5;
    y = y + 5;
    const mult = x * y;
    return mult;
}
// const result = multiply(5, 7);
// console.log(result);


const a = 5;
const b = 7;
const result = multiply(a, b);
console.log(result);


// non-primitive values, like object, arrayy are passed by reference


const manik = { name: "Manik", balance: 5000 }
const roton = { name: "roton", balance: 45000 }


console.log("before call", manik, roton);

function totalMoney(person1, person2) {
    person1.balance = 0;
    person2.balance = person2.balance * 2;
    const total = person1.balance + person2.balance;
    return total;
}
const balance = totalMoney(manik, roton);
console.log(balance);

console.log("after call", manik, roton);