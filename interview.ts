function revereString(word){
    let result = '';

    for(let i = word.length -1 ; i = 0; i--){
        result = result + word[i]; 
    }
    return result;
}

console.log(revereString('typescript'));