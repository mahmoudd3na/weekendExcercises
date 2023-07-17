number= [1, 0, 1, 1]; 

function binaryNum(num){
    let sum=0; 
    for(let i=0;i<num.length;i++){
        let index=(num.length-i)-1; 
        sum+=num[index]*Math.pow(2,i); //here there's a difference between the index of the value and i which is the index of the binary number and the two are the opposite directions
    }
    return sum;
}
console.log(binaryNum(number));