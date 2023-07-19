function numOfBus(arr){
    let people=0; 
    for(let i=0;i<arr.length;i++){
        people+=arr[i][0]-arr[i][1]; 
    }
    return people; 
}
let array=[[15,0],[13,10],[10,20],[30,10],[20,20]]; 
console.log(numOfBus(array)); 