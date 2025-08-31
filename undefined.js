let money;
console.log(money);

function total(a, b) {
    console.log(a, b);
    const sum = a + b;
    // console.log("sum is", sum);
}
total(2);
const result = total(5, 7);
// console.log(result);


function total2(a, b) {
    console.log("value of parameters", a, b);
    if (a == undefined || b == undefined) {
        return;
    }
    if (a && b) {
        const sum = a + b;
        return sum;
    }
}
const result2 = total2(1);
// console.log('result2', result2);


const phone = { brand: "Poco", price: 35500 }
console.log(phone.color);