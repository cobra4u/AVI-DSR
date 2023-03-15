// sum of digits of a number:

function summ(n){

    if (n==0){
        return 0
    }
    return n%10 + summ(parseInt(n/10));
}

let x = summ(324);
console.log(x)