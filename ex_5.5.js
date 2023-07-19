function abbreviatetwo(name){ 
    return name.split(" ").map(element => element[0].toUpperCase()).join("."); 
}
console.log(abbreviatetwo("Mahmoud dana")); 