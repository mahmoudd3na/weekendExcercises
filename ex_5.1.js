function tirmString(text){
    let result=text.replace(text[0],""); 
    result=result.replace(text[text.length-1],""); 
    return result; 
}
console.log(tirmString("string")); 