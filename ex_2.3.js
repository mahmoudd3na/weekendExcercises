function nextPerfectSqr(num){ 
    if(Math.sqrt(num)%1 != 0)
    return -1;

    num+=1; 
    while(Math.sqrt(num)%1 != 0)
    num++; 
    
    return num; 
}

console.log(nextPerfectSqr(114)); 