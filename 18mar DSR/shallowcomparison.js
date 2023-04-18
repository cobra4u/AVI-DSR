let obj = {
    name: "Divjot",
    age: 23
}

let obj2 = {
    name: "Divjot",
    age: 23
}

let result= (obj === obj2) ? true : false;
console.log(result)                                            //False

let result1= (JSON.stringify(obj) === JSON.stringify(obj2)) ? true : false;
console.log(result1) 

////////////////
let student = {  
    name: 'Divjot',  
    rollNo: 13
    
};  
let obj = Object.assign({}, student);  
obj.name = 'Singh';  
obj.rollNo = '191503003';   
 
console.log(obj);