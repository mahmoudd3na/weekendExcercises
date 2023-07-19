function fibonacci(n){
    let fibonacci=[]; 
    let num1=0;
    let num2=1; 
    fibonacci.push(num2);
    for(let i=1;i<=n;i++){
        num3=num1+num2; 
        fibonacci.push(num3);  
        num1=num2; 
        num2=num3; 
    }
    return fibonacci; 
}
console.log(fibonacci(10))
