// var a = 12; // accessible everywhere
// function myFunction() {
//   // var d, b, c;
//   // Hoisting
//   //function scope start  
//   {
//       //block scope start
//       var d = 10;
//       //block scope end
//   }
//   console.log(a); // alerts 12
//   var b = 13;
//   if(true) {
//     var c = 14; // this is also accessible throughout the function!
//     alert(b); // alerts 13
//   }
//   alert(c); // alerts 14
//   alert(d);
//   //function scope end
// }
// myFunction();
// alert(b); // alerts undefined


function demo() {
    var b = 30;
    const c = 40;
    // c = 50; Error as it is constant
    const d = [ 10, 20, 30, 40];
    // d = [ 10, 20, 30, 40 ]; Error cannot assign as this will be considered as new allocation of memory
    d[0] = 20;
    console.log(`d: ${d}`);
    const e = {
        name: 'Ananth'
    };
    // e = { 
    //     name: 'Shridharan'
    // };

    e['profession'] = 'Software Engineer';
    console.log(`e: ${e}`);

    if(true) {
        let a  = 20;
        console.log(b); // b accessible as it is in function scoped variable
    }
    //console.log(a); // a not accessible as it is block scoped variable
}
demo();
//console.log(a); 
// number, boolean, null, undefined
