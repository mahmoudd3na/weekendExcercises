function tribonacci(n,array){
    let tribonacci=[]; 
    let [num1,num2,num3]=array; 
    tribonacci.push(num1,num2,num3);
    for(let i=1;i<=n;i++){
        num4=num1+num2+num3; 
        tribonacci.push(num4);  
        num1=num2; 
        num2=num3; 
        num3=num4; 
    }
    return tribonacci; 
}
console.log(tribonacci(10,[1,1,1]))
