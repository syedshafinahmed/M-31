// function counter(){
//     let count = 0;
//     function innerFunction(){
//         console.log("Inside inner function");
//     }
//     return innerFunction;
// }
// const output = counter();
// console.log(output());


function counter() {
    let count = 10;
    return function () {
        count += 1;
        console.log("Inside the inner function", count);
    }
}
const innerFunc = counter();
const hehei = counter();
innerFunc();
innerFunc();
innerFunc();
hehei();
hehei();
hehei();