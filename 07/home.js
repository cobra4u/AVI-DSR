// function logMessage(){
//     console.log('This is message');
// }

// logMessage();

// function showMessage() {

// }

// let fn = function () {

//     fn();
// }

// let myfuntion = function loggingFunction () {
//     console.log('Here is a messge')
// }

// myfunction ();




// function getsecretcode(value) {

//     //let code = value * 42;
//     return Code;
// }
// let secretCode = getSecretCode(2);
// showMessage( secretCode );


///////////////////////////////////////////////
let key = 42;

function getSecretCode(value) {
    
    let keyGenerator = function(){
        let key = 12;
        console.log('in keyGenerator:', key);
        return key;
    }

    let code = value * keyGenerator();
    console.log('in get SecretCode:',key);
    return code;
}

let secretCode = getSecretCode(2);

showMessage(secretCode);


///////////////////////////////////////////////

// showMessage(67)