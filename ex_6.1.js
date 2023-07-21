function mumbling(text){
    let answer=""; 
    for(let i=0;i<text.length;i++){
        for(let j=0;j<=i; j++)
            if(j==0)
            answer+=text[i].toUpperCase(); 
            else answer+=text[i].toLowerCase(); 
        answer+="-"; 
    }
    return answer.slice(0,answer.length-1);
}
console.log(mumbling("RqaEzty"));