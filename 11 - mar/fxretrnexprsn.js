function x(a){
    return function (b){
        return a+b
    }
}

let s = x(50);

for (let i = 1; i < 10; i++) {
    console.log(s(i));
}

console.log(x(10)(20))

function z(n) {
    let a = 50;
    return a + n;
}

