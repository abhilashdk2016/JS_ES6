function add(d, a = 1,b = 1,c = 1) {
    // a === undefined ? a = 1 : a;
    // b === undefined ? b = 1 : b;
    // c === undefined ? c = 1 : c;
    return a + b + c + d; 
}

console.log(add(10));

/*if(10 == '10') {
    console.log(`10 equal to '10'`);
}

if(10 === '10') {
    console.log(`Will not enter if statement`);
} else {
    console.log(`10 not equal to '10'`);
}*/