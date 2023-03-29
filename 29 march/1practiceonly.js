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


// topic  swtich statement
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


//topic ARROW FX
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


//topic  FOR IN
// for in and for of to get values from OBJECT!
// for (val in dj){
//     console.log(`${val } = ${dj[val]}`)
// }
//////////////////////////////
//topic  bactics

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





//topic comparison operator 





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

//17 march, 2023

// topic BINDING IN JS

// this()

// binding of two types

// meaning of binding is method and properties joining



// Of 2 types Implicit  and Explicit
//call bind and apply



// let obj = {
//     name:'Divjot',
//     class: 10,
//     rno: 23432323,
    
// }

// function dd(obj){
//     console.log(this.rno)
// }



// this can only acces the parent object and not the grand parent object 


///new keyword

//constructor function

//spread operator 
//rest operator or paramenter

//  topic rest parameter is a ending parameter cannot 


// function define -- rest parameter 

// function dd(a,b,...c) - - this is rest parameter 
// calling time dd(a,b,...c) - this is the spread parameter





//18 march 2023

// topic for in for of

// For in   

//object 

// const arr = [1,2,66,4,5]

// for (val in arr){
//     console.log(val)
// }




// for (val of arr){
//         console.log(val)
//     }
   

//topic use strict
    
// let obj = {
//     name: 'dj',
//     location : 'hghhh'
// }

// for(val of obj){
//     console.log(val)
// }


// Q
//add sub mul divide

// let obj = {
//     mul:function(a,b){
//         return a*b
//     }
// }

// let obj2 = {
//     : function(a,b)
// }


// var a = 5 
// var a = 6
// console.log(a)


// topic absolute and relative


// var let const -- keep changing the values to check


// var a = 10 


// function aa(){
//     let a= 30
//     console.log("fx",a)
//     if (a ==30){
//         a=100
//         console.log("if",a)
//     }
// }
// aa()
// console.log("outer",a)




////////////////////////////////////////
// call bind and apply
// const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }

//     fullName = function(hometown,a,b) {
//     console.log(this.firstName + " " + this.lastName + " from " + hometown +" from " + a + " from "+ b);
//   }
  // fullName.call(person1,"alaska", "USA", "North America");
  
  // const person2 = {
  //   firstName:"Mary",
  //   lastName: "Doe"
  // }
  
 

// fullName.call(person2,"CALL","Mumbai", "India", "Asia");

  
// only difference between call and apply is the way we pass args
//in apply we pass args in array
//in call we pass args directly
//in bind we pass args directly and it returns a function

//bind
// let x = fullName.bind(person1,"BIND","alaska", "USA", "North America");
// x();

//apply
// fullName.apply(person1,["APPLY","alaska", "USA", "North America"]);


// let pp = fullName.bind(person1,"BIND","alaska", "USA", "North America");
 

// fullName.bind.person1(person2,)

// fullName= person1.fullName.bind(person2)
// fullName()



// console.log(console.log(1))
// let counter = createcounter();
// let counter1 = createcounter();

// function createcounter(){

//   return{
//     count:0,
//     increment:function(){
//       this.count++;
//     }
//   }
// }

// counte

// let d = function adsd(){
//   return{
//     count: 0,
//     counter: function(){
//       count+=1;
//     }
  
//   }
// }

// d.counter()
// let d =createCounter();
// function createCounter(){
//   return{
//     count:0,
//     increment : function(){
//       this.count++
//     }
//   }
// }

// console.log(d.increment());

// arr = ['a','b','c','d','e']

// console.log(arr.splice(3,6))


// obj1={
//   name:'dd',
//   age: 13,
//   getage:function(a){
//    console.log(this.age, this.a)
//   }
// }

// obj2={
//   name:'jj',
//   age: 44
// }

// obj1.getage.call(obj2,66);




// console.log(obj1.getage.a(obj2))


// let a = obj1.getage.bind(obj2)

// const oo = aa.bind(obj1);

// console.log(oo());


// obj1={
//   name:'dd',
//   age: 13,
//   getage:function(a){
//    console.log(this.age + a )
//   }
// }

// obj2={
//   name:'jj',
//   age: 44
// }

// console.log(obj1.getage.call(obj2,133))

// obj1.getage.apply(obj2,[obj2.name,obj2.age])

// console.log(obj1.getage.apply(obj2,[444]))

// let x = obj1.getage.bind(obj2 )
// x('software')



// function getage(a){
//   console.log(this.age , a)
// }

// let obj1={
//   name: 'dj',
//   age:55
// }


// getage.call(obj1)

// getage.apply(obj1,["thisisgood"])

// let  g =  getage.bind(obj1)
// g()


//difference between call and apply


//1  The call() method takes arguments separately
//2  The apply() method takes arguments seperately
//3  Bind returns a new function that can be stored in a variable and can be reusable
//4 Call



// function getage(...a){
//   console.log(this.age , a)
// }

// let obj1={
//   name: 'dj',
//   age:55
// }


// getage.call(obj1)

// getage.apply(obj1,1,2)

// let  g =  getage.bind(obj1)
// g()



// function dis(a,b){
//   console.log(a,b);
// }

// function ab(a,b,dis){
//   dis(a,b)
// }

// ab(1,2)


////////////////////////////////////////////////////////////////////////////////////////////
//27 march 2023




//Array 
//p= [1,2,3,4,5,6,7,8,9,10]
// console.log(Array.of(1,6))
// console.log(p)
//methods on array are 
//1. push
//2. pop
//3. shift
//4. unshift
//5. splice
//6. slice
//7. concat
//8. join
//9. indexOf
//10. lastIndexOf
//11. includes
//12. find
//13. findIndex
//14. forEach
//15. map
//16. filter
//17. reduce
//18. reduceRight
//19. every
//20. some
//21. sort
//22. reverse
//23. fill
//24. copyWithin
//25. entries
//26. keys
//27. values
//28. flat
//29. flatMap
//30. from
//31. of
//32. isArray
//33. toString
//34. toLocaleString
//35. toSource
//36. length


// let monthlyLabels = Array.of(Oct, Nov, 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep');

// console.log(monthlyLabels)\
// function add(a,b,c){
//   return a+b+c
// }

// let  p = Array.of(10 ,20 ,30);
// let q = Array.of(100,200,300)
// let r = Array.of(1000,2000,3000)

// let g= add(...p)

// console.log(g)

// let name =['bilbo', 'gandalf', 'thorin'];

// const res = names.find(ffbilbo);

// function ffbilbo(name) {
//   return name == 'bilbo';
// }

// console.log(findIndex(findbilbo))

// let r=[1,2,3,4,5,6,7,8];
// let gg=r.map(element=>element>4)
// console.log(gg)

// for (val of r){
//   if (val>5){
//     console.log(val)

//   }
// }

// const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
// fruits.fill('kiwi', 2,5);
// console.log(fruits)



//collectio of data 
// array ad objects 
// sets , maps, weakSets, weakMaps
// boolean null undef number bigint string symbol objects
//SETS
// iterate over set - for of
// takes input in form of array
// add 
// foreach can be used

// const set = new Set([1, 2, 3, 4, 5]);


// const set1 = newSet([1,2,3,5,6,7,8,9,10])

// set1.add(1)
// set1.add(2)
// set1.add(3)
// const iterator = set1.enteries();
// console.log(iterator.value);
// console.log(iterator.next().value);

//what is has
// has is used to check if the value is present in the set or not
// console.log(set.has(1));
// console.log(set.has(5));
// console.log(set.has(6));

//keys and values in sets are same 


//weak sets can only contain // primitive not possible
//objects that are held weakly are not held strongly
//weak sets are not iterable
//weak sets are not enumerable
//weak sets are not clonable
//weak sets are not extendable

//where is weakmap and map used
//map is used to store key value pairs
//weakmap is used to store key value pairs

// declare a map
// const map = new Map();

// // set keys
//set item in a map
// const keyString = 'a string',
//       keyObj = {},
//       keyFunc = function() {};

// // set values
// map.set(keyString, "value associated with 'a string'");
// map.set(keyObj, 'value associated with keyObj');
// map.set(keyFunc, 'value associated with keyFunc');
// const map1 = new Map()

// map1.set (1,'ff', 2,'gg')
// map1.set(3,'hh')
// console.log(map1)
// let x=map1.get('ff')

// foreach in map
// map.forEach((value, key) => console.log(`key = ${key}, value = ${value}`));

// console.log(map.get(keyString));
// console.log(map.get(keyObj));
//ntries in map
// console.log(map.entries());
//enteries returns an iterator
// console.log(map.entries().next().value);

// delete
//delete
//what is instance of
//instance of is used to check if the object is an instance of the class or not
// console.log(set instanceof Object);


//what is the difference between map and object
//map can have any type of key
//map can have any type of value
//features of object
//object can have only string as key
//object can have any type of value

// map is a extention of obj but onj is not an extention of map


//difference in map and weakmap is that map can have any type of key and weakmap can have only objects as key
//meaning of ennumerable is that

// properties of map are
// size
// set
// get
// has
// delete
// clear

// properties of weakmap are
// set
// get
// has
// delete


// properties of set are

// size
// add
// has
// delete
// clear

// properties of weakset are

// add
// has

// delete



//  create a object
//  let obj = {
//    name: 'dj',
//    age: 55
   // whay are 2 objects having same properties are not equal
    // because they are stored in different memory locations

    //homework

//methods on array with explain
//map
//filter
//reduce
//find
//findindex
//foreach
//every 

// sorting of objects by arrays 
// let arr = [
//   {name: 'dj', age: 55},
//   {name: 'dj', age: 55},
//   {name: 'dj', age: 55},
//   {name: 'dj', age: 55},
//   {name: 'dj', age: 55},
//   {name: 'dj', age: 55},
//   {name: 'dj', age: 55},
 //]

 // an array of objects 
 // move elements form one position to another in a array 


// let arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr)
// let arr1 = arr.unshift(4,444)
// console.log(arr1)
//add an elemetn to an array by 
//splice
//push
//unshift

//use splice to add an element to an array
// let arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr)
// let arr1 = arr.splice(2,3,44)
// console.log(arr1)

//slice in array


//shift in array
// let arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr)
// let arr1 = arr.shift()
// console.log(arr1)


// let arr = [[1,2,3],4,5,[6,7,8,9,10]]

// console.log(arr.flat())


// function flatten(arr){
//   let flat = []
//   arr.forEach(element => {
//     if(Array.isArray(element)){
//       flat = flat.concat(flatten(element))
//     }else{
//       flat.push(element)
//     }
//   });
//   return flat
// }



//Array depth in Js
// let arr = [[1,2,3],4,5,[6,7,8,9,10]]
// let arr1 = [1,2,3,4,5,6,7,8,9,10]
// let arr2 = [[1,2,3],4,5,[6,7,8,9,10]]
// let arr3 = [[1,2,3],4,5,[6,7,8,9,10]]
// let arr4 = [[1,2,3],4,5,[6,7,8,9,10]]


// console.log(arr.depth())
// console.log(arr1.depth())
// console.log(arr2.depth())
// console.log(arr3.depth())
// console.log(arr4.depth())



//HOMEWORK
// map or set
//  'danise soma' 
//find the frequency of each character in the string


//reduce method in array 
// let arr = [1,2,3,4,5,6,7,8,9,10]

// let arr1 = arr.reduce((acc,curr)=>{
//   return acc+curr






/// desi method find fixi

// function countfreq(arr)
// {
//   for(let i =0; i<arr.length; i++){
//     let count = 1;
//     for(let j =i+1; j<arr.length; j++){
//       if(arr[i] == arr[j]){
//         count++;
//         arr.splice(j,1);
//       }
//     }
//     console.log(arr[i],count)
//   }
// }
// let str = 'divjot singh';

// let arr = [...str];
// console.log(arr)




// countfreq(arr)


//frequency of each character in a map

// let str = 'danise soma'
// let map = new Map()
// for(let i =0; i<str.length; i++){
//   if(map.has(str[i])){
//     map.set(str[i],map.get(str[i])+1)
//   }else{
//     map.set(str[i],1)
//   }
// }

// console.log(map)







// let map1 = new map("divjot singh")
// for(i=0; i<lenght.map1){

// }

// console.log(map1.length)


/////////////////////////////////////////////////////
//28 March,2023



//generator in js are used to create iterators
// function* generator(){
//   console.log(1)
//   yield 1;
//   console.log(2)
//   yield 2;
 
//   console.log(10)
//   yield 3;
// }

// let gen = generator()
// gen.next()
// gen.next()
// gen.next()


//concept behind generator function is that it 
//is a function that can be paused and resumed
//next yield and return are the keywords used in generator function
//next is used to resume the function
//yield is used to pause the function
//return is used to end the function
// done is used to check if the function is done or not
//value is used to get the value of the function
//value is true when the function is done
//value is false when the function is not done



// function* fibo(n){
//   let a = 0;
//   let b = 1;
//   for(i=0; i<n; i++){
//     yield a;
     
//     [a,b ]= [b,a+b]
//     }
//   }
//   let gen = fibo(10)
// console.log(gen.next())

// function* itr(n){
//   for (let i=1;i<=n;i++){
//     yield i;
//   }
// } 
// let pp=itr(10)
// console.log(pp.next())
// console.log(pp.next())
// console.log(pp.next())
// console.log(pp.next())
// console.log(pp.next())
// console.log(pp.next())
// console.log(pp.next())


// function* fibonacci(g){
//   let a = 0;
//   let b = 1;
  
//   for(i=0; i<g; i++){
//     yield a;
//     [a,b] = [b,a+b]
//   }
// }

// let gen = fibonacci(8)
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.return())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

//explain the output

//irritators are used to iterate over the data
//why are irritators used
//example
// let arr = [1,244,563,464654,33455,356,357,184,69,610]
// let arr1 = arr[Symbol.iterator]()
// console.log(arr1.next().value)
// console.log(arr1.next().value)
// console.log(arr1.next().value)
// console.log(arr1.next().value)
// console.log(arr1.next().value)
// console.log(arr1.next().value)
// console.log(arr1.next().value)
// console.log(arr1.next().value)
// console.log(arr1.next().value)
// console.log(arr1.next().value)

//error handling in js
//try catch finally
//try is used to run the code
//catch is used to catch the error
//finally is used to run the code after the try catch block
//throw is used to throw the error
//example of error handling
// try{
//   console.log('hello')
//   throw Error('NO')
// }catch(err){
//   console.log(err)
// }finally{
//   console.log('finally')
// }



//how many types of error are there in js
//syntax error
//reference error
//type error
//range error
//uri error
//eval error



//why is throw used
//throw is used to throw the error




//Homework
//how to create custom error
//decorators 
//higher order fn
//module pattern




/////////////////////////////////////////////////////////////
//29 -march-2023
//higer order function is 
//closure is a function that returns a function
//module pattern


//nested function in js

// const arr = [1,2,3,4,5,6,7,8,9,10]

// create a higher order function 

// function area(rad){
//   return Math.PI*rad*rad
// }
// function circum(rad){
//   return 2*Math.PI*rad
// }
// function dia(rad){
//   return 2*rad
// }

// function area(r){
//   return Math.PI*r*r
// }

// function main(arr){
//   for(i=0; i<arr.length; i++){
//   return (area(arr[i]))
//   }
// }
// console.log(main([1,2,3,4,5,6,7,8,9,10]))


// closure is a function bundled together along with its lexical scope
//closure is a function that returns a function

//what is lexical scope
//lexical scope is the scope of the variable that is defined in the function

//  