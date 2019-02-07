[15,30,10,34,35,60,12,4,6].forEach((element) => {
    if( element % 15 == 0) {
        console.log('FizzBuzz');
    } else if( element % 3 == 0) {
        console.log('Fizz');
    } else if(element % 5 == 0) {
        console.log('Buzz')
    } else {
        console.log(element)
    }
});