let data;
data = 0;
data = ''; // empty string is falsy
data = ' '; // has a white space
data = '0';
data = false;
data = null;
data = undefined;
data = {}; // truthy
data = []; // truthy
data = true;
data = [];
console.log("value of data", data);
if (data) {
    console.log("value of data is truthy");
}
else {
    console.log(data, "is falsy");
}


// capture falsy value to go inside if block
if (!data) {
    console.log(data, "is falsy");
}
else {
    console.log(data, "is truthy");
}


// capture all positive
// double not !!
// capture any value to boolean
if(!!data === true){
    console.log("only true inside the double not");
}