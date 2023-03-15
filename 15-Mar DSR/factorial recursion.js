// factorial
function fact(a){

    if(a == 1){
        return 1
    }

    if(a>0){

         return a*fact(a-1);

    }
    
}

var x = fact(5);

console.log(x)