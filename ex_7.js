const func = n => n>20; 
const func2= n => n*2; 
const func3= n => n*n; 
function filter(arr, func){
    let answer=[]; 
    for(let i=0;i<arr.length;i++){
        if(func(arr[i]))
        answer.push(arr[i])
    }
    return answer; 
}
function forEach(arr,func2){
    let answer=[]; 
    for(let i=0;i<arr.length;i++){
        answer.push(func2(arr[i])); 
    }
    return answer; 
}
function map(arr,func3){
    let answer=[]; 
    for(let i=0;i<arr.length;i++){
        answer.push(func3(arr[i])); 
    }
    return answer; 
}

let array1=[1,6,34,23,56,79,20,15]
console.log(map(array1,func3)); 