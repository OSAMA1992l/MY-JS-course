// short curcuit


// console.log(30 && 50);
// console.log("" && 90);

// console.log(400 || 600);
// console.log(-0 || 686);

// short cuircuit complete;


// dicision making opertaors
// condidnations

// let userSignedIn = true;
// let useLoggedIn = true;
// if (userSignedIn == true || useLoggedIn == true){
//    console.log("show the dashboard")
// }
// else{
//    console.log("show the home page")
// }
  

// else-if

// let userSubuscribtion = "super"

// if (userSubuscribtion == "unsubuscribe"){
//    console.log("show the payment page");
// }
// else if (userSubuscribtion == "power"){
//    console.log("show the hindi movies")
// }
// else if (userSubuscribtion == "super"){
//    console.log("show thw hollywood movieas")
// }
// else  {
//    console.log("show the all content")
// }

// nested condition

// when we write if inside if condition is called nested condidtionals
// let userSubuscribtion = true;
// let userJIO = true;
// let hotstar = true;

// if (userSubuscribtion){
//    if(userJIO){
//       console.log("show the panchayat")
//    }
//    else if (hotstar){
//       console.log("show the IPL match")
//    }
// }

// LOOP  are three types 
// 1) while loop 
// 2) for loop
// 3) do loop

// while loop written below;


// while loop started below

// let m =1;
// while (m<=10){
//    console.log(m);
//    m+=1;
// }

// FOR loop

// for (i =1; i<=10; i+=1){
//    console.log(i);
// }


// DO loop

// y =1;
// do {
//    console.log(y);
//    y+=1;
// }while(y<=10);


// unary oprantor
// work on one oprand

// a =30;
// console.log(++a)
// console.log(a);

// a  = 40;

// console.log(a--);
// console.log(a);


// function osama(x){
//     if(x*4==20){
//         console.log("even")
//     }
//     else{
//         console.log("odd")
//     }
// }
// osama(6);

// function multiply(x,y){
//     console.log(x*y)
// }

// multiply(10,20);

// let totalMarks = 65;

// if (totalMarks>=90){
//     console.log("GRADE A")
// }
// else if (totalMarks>=70){
//     console.log('Grade B')
// }
// else if (totalMarks>50){
//     console.log("Grade C")
// }
// else{
//     console.log("grade F")
// }





// short curcuit always work on truthy and falsy values
//  in and iopratror (&&) when first letter is false print first letterr if first is true hence putting value is second in and oprator

// example below and oprator

// console.log(-0 && 50);

// or oprator is first letter is true to putting second letter

// example below
// console.log(89||"")

// conditionals

// inprogramimg language java script provide us decision making cabability

// let peopleAge = 60;
// let male = false;

// if (peopleAge>=18 || male==true){
//     console.log("give the vote")
// }
// else {
//     console.log("not give the vote")
// }

// var userSubuscribtion = "suhaib"

// if (userSubuscribtion == "unsubuscribe"){
//     console.log("payment page")
// }
// else if (userSubuscribtion == "super"){
//     console.log("hindi movies")
// }
// else if ( userSubuscribtion == "power"){
//     console.log("hollywood movies")
// }
// else {
//     console.log("ALL movies")
// }


// nested condistionals

// let userSubuscribtion = true;
// let userLIOns = false ;
// let userjio  = false;

// if (userSubuscribtion==true){
//     if(userLIOns){
//         console.log("Spider man")
//     }
//     else if (userjio){
//         console.log("IPL match")
//     }
//     else {
//         console.log("mirzapur")
//     }
// }

// LOOP = when we print one value one more than times is called loop

// loop are 3 types
// while
// for
// do-while

// while 

// let m=1;

// while (m<=10){
//     console.log(m);
//     m = m+1;
// }

// for (let y =1;y<=10;y+=1){
//     console.log(y)
// }

// do 
// let y =1;

// do {
//     console.log(y);
//     y+=1;
// } while(y<=10);

// unary oprantors always work on one oprand

// let x = 20;

// console.log(x--)
// console.log(x);

// break and continue

// let k = 1;

// while(k<=10){

//     if(k%7 ===0){
//         1++;
//         continue;
//     }
//     console.log(k);
//     k+=1;
// }
// console.log("End..")

// function if web development a lot of time we use functions
// we can make own function and j.s also provide own function for us

// function evenOrOdd(){
//     console.log("function 1");
//     console.log("function 2");
//     console.log("function 3...");
//     console.log("function 4");
// }

// evenOrOdd();
// evenOrOdd();
// evenOrOdd();
// evenOrOdd();

// console.log(Math.sqrt(10)) 

function evenOrOdd(x){
if(x*2==4){
    return "even"
}
else{
    return "odd"
}
}


let y = evenOrOdd(5);
console.log(y);