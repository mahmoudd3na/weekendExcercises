function shortestWord(text){ 
    let words=text.split(" "); 
    let shortest=words[0].length; 
    for(word in words){
        if (word.length < shortest)
        shortest=word.length; 
    }
    return shortest; 
}

console.log(shortestWord("wow what a wonderful world")); 