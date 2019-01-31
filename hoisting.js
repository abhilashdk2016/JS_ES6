// Hoisting only moves the declarations to the top, not the initializations. 

bookName("ES8 Concepts");
function bookName(name) {
   console.log("I'm reading " + name);
}

bookName2("ES8 Concepts");
var bookName2 = function(name) {
    console.log("I'm reading " + name);
} 

function foo(a) {
    a();
    function a() {
       console.log("Mehul");
    }
 }
 
 foo(); // ??
 foo( undefined ); // ??
 foo( function(){ console.log("Not Mehul"); } ); // ??