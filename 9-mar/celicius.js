//c = f * 5 / 9 + 32;
//var f = 312;
//var f = prompt("enter the farenheit value");
//var f = readInt("enter the farenheit value");

const prompt = require("prompt-sync")(); 
var f = prompt();


//const prompt=require("prompt-sync")(); 
  
var f = prompt();
var cel = (f + 32) * 5 / 9;
//method 1 - round
//y= Math.round(cel);
//method 2 - parseInt
y = parseInt( cel );
console.log("celisius =", y);
