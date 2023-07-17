const array= [1, 5, 42, 2, 77,2]; 

function sumOfLow(array){ 
    let index=0; //notice that we initialized the index to 0 so that if the smallest number was the first the splice of the array will work with the right index
    let small=array[0]; 
    for(let i=1;i<array.length;i++){
        if(array[i] < small){
            index=i; 
            small=array[i];
        }
    }
    array.splice(index,1); 
    let small2=array[0];
    for(let i=1;i<array.length;i++){
        if (array[i] < small2){
            small2=array[i]; 
        }
    }
    return small+small2; 

}
console.log(sumOfLow(array)); 