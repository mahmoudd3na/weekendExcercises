function toCamelCase(text){
    let words=[]; 
    words=text.split("-"); 
    if(words.length <= 1)
    words=text.split("_");
    let answer=[]; 
    answer+=words[0]; 
    for(let i=1; i<words.length;i++)
    answer+=words[i][0].toUpperCase()+words[i].slice(1); 
    return answer; 
}

console.log(toCamelCase("the-stealth-warrior"));