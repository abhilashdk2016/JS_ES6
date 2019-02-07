// If number is divisible by 5 add it in seprate array (forEach with arrow function)
let arr = [1,10,20,35, 46, 67, 75, 90];
let divisibleBy5 = [];
arr.forEach((e) => {
    if(e % 5 == 0){
        divisibleBy5.unshift(e);
    }
});
console.log(divisibleBy5);

// Reformat this string using Template Literals
var customer = { name: "Foo" }; 
var card = { amount: 7, product: "Bar", unitprice: 42 }; 
var message = "Hello " + customer.name + ",\n" + 
"want to buy " + card.amount + " " + card.product + " for\n" + 
"a total of " + (card.amount * card.unitprice) + " bucks?"; 
let reformatted_message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`;
console.log(reformatted_message);
