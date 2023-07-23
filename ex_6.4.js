function isogram(text){
     if(text.length ===0 ) return true;
     let letters=text.split("");
     let ans=[]; 
     for(let i=0;i<letters.length;i++){
        if(ans.includes(letters[i].toLowerCase())) return false; 
        else ans.push(letters[i].toLowerCase()); 
     }
     return true; 
}
console.log(isogram("Dermatoglyphics"))