function chunkArray(myArray, chunk_size){
    var index = 0;
    var arrayLength = myArray.length;
    var temp = [];
    
    for (index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index+chunk_size);
        temp.push(myChunk);
    }

    return temp;
}

console.log(chunkArray([1, 2, 3, 4], 2));
console.log(chunkArray([1, 2, 3, 4,5], 2));