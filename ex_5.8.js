function longestWord(text){ 
    let words=text.split(" "); 
    let longest=words[0].length; 
    for(let i=1;i<words.length;i++){
        if(words[i].length> longest)
        longest=words[i].length;
    }

    return longest; 
}

console.log(longestWord("wow what a wonderful world"))