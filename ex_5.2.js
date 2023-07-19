function stringRepeat(n,text){ 
    let answer=""; 
    for(let i=0;i<n;i++)
    answer+=text; 

    return answer; 
}
console.log(stringRepeat(6,"i"))