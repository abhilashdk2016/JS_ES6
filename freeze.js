// var ob1 = {
//     prop1 : 1,
//      prop2 : {
//          prop2_1 : 2 
//      }
//  };
//  Object.freeze( ob1 );
 
//  const ob2 = {
//     prop1 : 1,
//      prop2 : {
//          prop2_1 : 2 
//      }
//  }
 
//  ob1.prop1 = 4; // (frozen) ob1.prop1 is not modified 
//  ob2.prop1 = 4; // (const) ob2.foo gets modified
 
//  ob1.prop2.prop2_1 = 4; // (frozen) modified, because ob1.prop2.prop2_1 is nested
//  ob2.bar.value = 4; // (const) modified 
 
//  ob1.prop2 = 4; // (frozen) not modified, bar is a key of obj1
//  ob2.prop2 = 4; // (const) modified
 
//  ob1 = {}; // (frozen) ob1 redeclared (ob1's declaration is not frozen)
//  ob2 = {}; // (const) ob2 not redeclared (used const)
const b = {
     p2: 3,
     p3: {
         property1: 4
     }
 };
 Object.freeze(b);
 Object.freeze(b.p3);
 b.p2 = 10;
 b.p3.property1 = 10;
 console.log(`b.p2: ${b.p2}`);
 console.log(`b.p3.property1: ${b.p3.property1}`);
