function revereString(word){
    let result = '';
    console.log(word[1]);

    for(let i = word.length -1; i >= 0; i--){ 
        result = result + word[i]; 
    }

    return result;
}

console.log(revereString('type'));


function arrayReverse(array){

    
    for(let i = array.length -1; i>=0; i--){
        array.push(array[i]);
    }
    

    for(let i = 0; i<array.length/2; i++){
        array[i] = ' ';
    }
    
    console.log(array);
}


console.log(arrayReverse([1,2,3,4]));