function unique(arr) {
    let common=null; 

    //first we should determine the common which we can do only with the first 3 elements 
    if (arr[0] == arr[1]){
        common=arr[0]; 
    } else if(arr[2] == arr[0]){
        return arr[1]; 
    } else return arr[0]; 

  for(let i=0;i< arr.length;i++)
    if(arr[i] != common) 
    return arr[i]; 
    
}
console.log(unique([ 1, 1, 1, 2, 1, 1 ]) );