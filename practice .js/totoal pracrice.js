// short cuircuit truthy and falsy valus

// let age =41;

// if (age<=18){
//     console.log("ilegible")
// }
// else if (age>=19 && age <=50){
//     console.log("its a senior citizen")
// if (age>=20 && age<=40){
//     console.log("senior plus")
// }
// else if (age>=40 && age <=49){
//     console.log("senioe ++")
// }
// }
// else if (age>=51 && age<=100){
//     console.log("old catogary")
// }

// switch conditionals

// let type = "default"
// let a = 100;
// let b = 30;
// switch (type){
//     case "addition":
//         console.log(a+b);
// break;
//         case "subtract":
//         console.log(a-b);
//         default: "default"
//             "this is default value"
// }

// loop 

// let x = 1;

// while (x<=10){
//     console.log(x)
//     x+=1;
// }

// for (let y =1; y<=10;++y){
//     console.log(y);
// }

// let m =1;
// do {
//     console.log(m);
//     ++m;
// } while (m<=10);

  
// let x = 2;

// while (x<=10){
//     if(x*5==40);
//     console.log(x);
// x+=1;
// }

// let m =1;
// while (m<=10){
//     if(m/5==1.4){
//         ++m;
//         break;
//     }
//     console.log(m);
//     ++m;
// }

// function osaam (){
// console.log("this is one function1")
// console.log("this is one function2")
// console.log("this is one function3...")
// console.log("this is one function4")
// }
// osaam();
// osaam();
// osaam();

// function evenOrOdd (x){
//    if (x*4==16){
//    return "EVEN"
//    } 
//    else{
//     return "odd"
//    }
// }
// let x = evenOrOdd(5);
// console.log(x);

// Araay when in one variable we store one more than object is called array

// let arr1 = [10,10,null,undefined,"osama"];
// arr1.reverse("osama");
// console.log(arr1)

// console.log(arr1.indexOf("osama"));

// let table = {id:101,name:"osama",salary:1550}

// console.log(table);

// console.log(table.name);

// table.salary = 3000;
// console.log(table);
// delete table.name
// console.log(table)

// truthy and falsy values

// console.log(10 || -0);

// conditionals

// let age  = 28;

// if (age>=18 ){
// console.log('give the vote');
// }else if (age>=19 && age<=50){
//     console.log("senior citizen")
// }else if(age>=51 && age<=100){
//     console.log("old catagary")
// }

// let userSignnedIn = true;
// let userLoggedIn = false;

// if (userLoggedIn && userSignnedIn){
//     console.log("show the dashboard")
// }else{
//     console.log("home page")
// }
// loop

// let y = 1;

// while (y<=10){
//     console.log(y);
//     ++y;
// }

// for (let m =1;m<=10;++m){
//     console.log(m);
// }
// b =1;
// do {
//     console.log(b);
//     ++b;
// } while (b<=10);
//switch

// let type = "add";

// switch (type){
//     case "add":
//     console.log(10+10);
// }






// function

// function evenOrOdd (x){
//     if (x*4==16){
//        return "even"
//     }
//     else{
//         return "odd"
//     }
// }

// let y = evenOrOdd(4);
// console.log(y);

// Array;
// let arr = [10,10,null,undefined,909, "osama"];
// console.log(arr);
// console.log(arr.length);
// console.log(arr.indexOf(null))
// arr.pop[5];
// console.log(arr);
// object
// let object = {id:101,name:"osama",salry:15550};
// console.log(object);
// objec

// annynomous function whose which no name and identity is calle danynamous function;
// its put put on q variables
// let y = function(){
//     console.log("my name is osama");
// }
// ();
// immediatly function
// (function (){
//     console.log("my name is osama");
// })();

// console.log("Start...");

// setTimeout (function f(){
// console.log("this is th epower");
// },5000);
// console.log("End....");
// let x = 10;

// x = 20;
// console.log(x);
// anynomous function that no name and identity

// let = function(){
//     console.log("my name is osama")
// }
// ()

// annynomous function those function whose not required any name and identity its store in variables;
// let product = function(){
//     console.log("this is anynomus function")

// }
// ();

// imediatly involve function when function exucute to temporiary is called imediatly function;
// we are give the name and not;
// (function (){
//     console.log("this is imediattly function")
// })();

// Call back and high order funcion = when we give function inside the function

// function product(x,osama){
// product is a high order function;
// osama is a callback
//     console.log(x*x);
//     osama(x*x)
// }
// product(10,osama);

// function osama(x){
// console.log("this is call back", x)
// }


// IMPORTANT method of Object;

// let product = {
//     name: "i phone 14 pro max",
//     company: "Apple",
//     Price : 15000,
//     color: "Black",
// }
// console.log(product);
// product.name = "vivo v20"
// console.log(product)
// Object.defineProperty(product," i phone 14 pro max" , {writable : false});

// programming languages are based on two softwre (compiler)(interpreted);
// some languages work on interpreted nad some langugese work on compiler
// compiler work on those languages whose exute the code like single way if we write a code in 10th line
// and error is 10th all code are false
// c c++

// interpreted languages those language work on the compiler its exute the code line by line
// if we write a code 10th line and error is 10th line all code are show when errore is not come whrn error is come code exution are stoped = bash;

// hybride languages those languagges work on compiler and interpred is called hybride languages like = java,js python 
// there are two phases of hybride languages
// compiler and scope resulation;
// interpret phase



let product ={
    name:"iphone 14 pro max",
    company: "Apple",
    color: "Black",
}
Object.freeze(product)
console.log(product)
product.name= " iphone 10"
delete product.color

Object.keys(product)

Object.values(product)

console.log(product)

Object.entries(product);

console.log(product)