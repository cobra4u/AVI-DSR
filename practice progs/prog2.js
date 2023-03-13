a = function num1 (x){
    return function num2 (y) 
    {
        return x+y;
    }
}

let c = a(10);
console.log(c(20));
