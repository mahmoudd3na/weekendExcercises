function maskify(text){
    let answer=""; 
    let count=text.length; 
    for(let i=0;i<text.length;i++)
    if(count > 4){
    answer+="#"; 
    count--; 
    }
    else answer+=text[i];   
    return answer;
}

console.log(maskify("Nananananananananananananananana Batman!"));
