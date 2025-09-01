function add(a, b){
    console.log(arguments);
    const params = [...arguments];
    console.log(params);
}
add(1, 2, 3, 4, 5, 6, 7);