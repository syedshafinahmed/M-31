const name = "Tom Hanks";
if(true){
    const data = 58;
    console.log(data, name);
    doMath(88, 999);
}

for(const num of [1, 2, 3, 4, 5]){

}

// function or local scope
function doMath(a, b){
    console.log(a, b);
    const sum = a + b;
    const total = sum + 10;
    console.log(total);
}
// console.log(a, b);

// if you declare a function by let or const you cannot call it before the declaration
// it is called temopral dead zone