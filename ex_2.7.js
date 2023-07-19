function basicOp(operation,num1,num2){ 
    if(operation == "+")
        return num1+num2; 
    else if(operation == "-")
        return num1-num2; 
    else if(operation == "/")
        return num1/num2; 
    else if(operation == "*")
        return num1*num2;    
}
console.log(basicOp("-",5,2));
