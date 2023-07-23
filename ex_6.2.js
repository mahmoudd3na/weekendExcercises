function countingDublicates(text){
    let answer=[]; 
    let duplicate={}; 
    text=text.toLowerCase();
    for(let i=0;i<text.length;i++)
        if(duplicate[text[i]])
        duplicate[text[i]]++;
        else duplicate[text[i]]=1;  
    
    for(const key in duplicate)
        if(duplicate[key]>1)
            answer.push(` ${key}: ${duplicate[key]} times`);
    return answer;
}

let word="aA11"; 
console.log(countingDublicates(word)); 