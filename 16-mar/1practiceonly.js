// function abc(a,b){
//     return a-b;
// }
 ///////////////
// let fx = function abc(x,y){
//     return x+y
// }
// console.log(abc(4,3));
// console.log(fx(4, 3));
/////////////////////

// obJECt
// let person ={
//     name:'DJ',
//     claass:4,
//     nv: 'frf'

// }
// console.log(person.nv)

// /////////////////////////

// let mySymbol = Symbol();

// let peerson = {
//    name : 'DJ',
//    age: '21',
//    [mySymbol]: 'secretInformation'
// }

// peerson['age'] =44;
// console.log(peerson.age)

//object can have functions

// let peerson = {
//     name : 'DJ',
//     age: '21',
//     showInfo: function(){
//         console.log(peerson.name+' is '+peerson.age);
//     }
//  };
// function inct(p){
//     p.age++;
// }
// inct(peerson);
// console.log( peerson.age );

//  peerson.showInfo();

// let pop ={
//     name:'gdsnw',
//     rno:'121212'
// }

// function ll (pop){
//     pop.rno++;

// }
// ll(pop);
// console.log(pop.rno);
// const names = ["Chintu","Pintu", "Ghanta"];
// names1=[]
// names.forEach((name, i)=>{
//      names1.push("Mr"+ name);
// });
// console.log(names1);
// console.log(names);


// const num=[33,45,65,67,34,2,7,345];
// const newArr= numbers.map(myfunction)

// function myfunction(num) {
//     return num*10;
// }

// const values = ['a', 'b','c'];
// const set = values.filter (funtion (item))
// {
//     return item > 'b';

// };
//filter ()
// const values =['a', 'b','c','d','e','f']
// const set = values.filter(function (item){
//      return item > 'd';
// });
// console.log(set); 
 
// const values = ['a','b','bbb','gtgs','vf'];
// console.log(values.indexOf('c'));
// console.log(values.indexOf('b'));


//find()
// let nums = ['axacsdfvbgdnh', 'bf','cdsfd', 'dvd'];
// for (let i=0; i<3;i++){
//     let found = values.find();
// }
// console.log (found);  

//foreach
// const values=[1,2,3,446,6,65,34];
// values.foreach(funtion(item))
// console.log(vales.indexOf('v'));

//scope
// let productid=456789;

// function showproductid() {
//     console.log(productId);
// }

// showproductid();
///////////////////////////
// const prompt=require("prompt-sync")({sigint:true}); 
  
// var name = prompt("What's your name");
// console.log("hello"+name+"!");
/////////////////////////////////////////////////////////////

/// check input is array or not
// arr=[1,2,4,6,665,5,656,3,4,45,345,24,345,24,343];
// console.log(typeof(arr));
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// first=arr;
// console.log(ar1);
// function dd(a,n) {
//     if (n>0){
//         return a.splice(0,n);
//     }
//     else{
//         return 0;
//     }
// }

// console.log(dd(arr,7));
// console.log(arr);


// console.log(arr.pop());


/////////////////////////////////////////////////////////////////




// filter ()
// const values =[1,2,3,4,5,6,7,8,9]
// const set = values.filter()

// polyfils  
// temporal dead zone 

// teranary op

// const iterate = f => x => [x, () => iterate(f) (f(x))];
// function pp(x);
//     const main = iterate(x => x * x);


// console.log(
//   f(x) (5)  ()  ()  ()  ()  () () ()); 


// function sum(a) {
//     return function(b) {
        
//         if (b){
//             return sum(a*b);
//         }
        

//     }
// }
// let x=sum ((10)(40))








///////////////////////////////

//to do currying again aagin but stopping using a stoping conditon


// function mul(a) {
//     return function(b)
//     {

//         if(b) {
//             return mul(a*b);
//         }
//         else {

//             return a
//         }
//     }
// }

// console.log(mul(10)(20)(30)());







//sum of digits of a number:

// function summ(n){

//     if (n==0){
//         return 0
//     }
//     return n%10 + summ(parseInt(n/10));
// }

// let x = summ(324);
// console.log(x)






//factorial
// function fact(a){

//     if(a == 1){
//         return 1
//     }

//     if(a>0){

//          return a*fact(a-1);

//     }
    
// }

// var x = fact(5);

// console.log(x)






//fibonacci

// var x = 0;
// function fibo (a){
//     if (a==1){
//         return 1;
//     }
    
//     return x + fibo( )

// }


// swtich statement
//can be self declared or user input based expresion
// switch (a){}


// switch(new Date(). getDay()) {
// let a= 1;
// const prompt=require("prompt-sync")({sigint:true}); 
  
// var a = prompt("What's the day");
// console.log(a);





// a = 'Tuesday';
// switch(a) {
//     case 1:
//        day = 'Monday';
//         console.log('python');
//         break;

//     case 2:
//        day = 'Tuesday';
//         console.log('java1');
//         break;

//     case 3:
//         day = 'Wednesday';
//         console.log('java2');
//         break;

//     case 4:
//         day = 'Thursday';
//         console.log('java3');
//         break;

//     case 5:
//         day = 'Friday';
//         console.log('java4');
//         break;

//     case 6:
//         day = 'Saturday'
//         day = 'Sunday'
//         console.log('Holiday');
//         break;

//     default: 
//      console.log('Break-day');
// }


// switch(new Date(). getDay()) {
//     break;




//array function

//concat

// const ar1=[1,2,35,35,5];
// const ar2=[6535,3454,34565,67654,3465,5353];

// const x = ar1.concat(ar2)

// console.log(x)

// console.log(ar1.fill(4))


//ARROW FX
//THIS
//Object


// const dj={
//     name : 'Divjot',
//     yearOB : 2002,
//     phoneno:7051011995,
//     // Age: 21,
//     email:'dj@gmail.com',
//     agecal: function(){
//         return 2023-this.yearOB;
//     }
// };
// console.log(dj.agecal());


// FOR IN
// for in and for of to get values from OBJECT!
// for (val in dj){
//     console.log(`${val } = ${dj[val]}`)
// }
//////////////////////////////
//bactics

// for (val in dj){
//     console.log(`${this.age}`)
// }

/////////////////////////////

// for (val in dj){
//     console.log(dj.agecal())
// }




//FOR OF

//map, for each , for of


// const arr = [1,2,3,4,5,6,7];

// for (val in arr ){
//     console.log(val)
// }

// for (val of arr){
//     console.log(arr)
// }





// arr.map(arr => console.log(arr));
// arr.forEach(arr => console.log(arr));





//comparison operator 





// const dj={
//     name : 'Divjot',
//     yearOB : 2002,
//     phoneno:7051011995,
//     // Age: 21,
//     email:'dj@gmail.com',
//     agecal: function(){
//         return 2023-this.yearOB;
//     }
// };
// console.log(dj.agecal());





// const dj3={
//     name : 'Divjot',
//     yearOB : 2002,
//     phoneno:7051011995,
//     // Age: 21,
//     email:'dj@gmail.com',
//     agecal: function(){
//         return 2023-this.yearOB;
//     }
// };

// console.log(dj3===dj);
// console.log(dj3==dj);



//use strict 





Problem 1: Sum of digits of a number

Input : 12345
Ouput : 15

Problem 2: check whether the number is armstrong number or not

Input1 : 371
output : yes

Input2 : 321
output : no

Problem 3: count the number of even and odd number in a given array

Input1 : [3,6,8,7,13,98,76]
output : even_number = 4
         odd_number = 3

Problem 4: print the number of vowels and consonants in a given sentence

Input : "How many vowels in a given sentence"


Problem 5: Apply Linear Search Algo


Problem 6 : Fibannoci Series (itreative)

Problem 7: Fibannoci Series ( recursion)

Problem 8: Concatenation of Array (Input: nums = [1,2,1], Output: [1,2,1,1,2,1] )

