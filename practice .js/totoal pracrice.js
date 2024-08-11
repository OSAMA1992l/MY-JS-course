// short cuircuit always work on truthy and falsy values

// console.log(300 && '');
// console.log(-0 && 89);


// console.log(89 ||"");
// console.log(-0 || "osama");

// java script condotionals;

// let userLoggedIn = false;
// let userSignnedIn = true;
// if (userLoggedIn || userSignnedIn){
//     console.log("show the dashboard");
// }
// else {
//     console.log("show the home page");
// }

// let userSubuscribtion ="osaam"

// if (userSubuscribtion == "unsubuscribe"){
//     console.log("show the Payment page");
// }
// else if (userSubuscribtion == "super"){
//     console.log("show the Bollywood movies");
// }
// else if (userSubuscribtion == "power"){
//     console.log("show the  Hollywood movies");
// }
// else {
//     console.log("show the all movies");
// }

// nested consitionals

let userSubuscribtion = true;
let userJioCinema = false;
let userHotstar = false;

// if (userSubuscribtion){
//     if (userJioCinema){
//         console.log("show the hindi web series");
//     }
//     else if (userHotstar){
//         console.log("show the IPL match");
//     }
//     else{
//         console.log("show the mirzapur");
//     }
// }

// Loop 
// loop is used to repeat a particular tastone and more than times a particular periods

// loop are three types 

/*loop are three types
while loop 
for loop
do-while loop*
*/

// while loop

// let x = 1;
// while (x<=100){
//     console.log(x);
//     x+=1;
// }

// for loop

// for (let x = 1;x<=10;x+=1){
//     console.log(x);
// }

// do-while loop;
// let y =1;
// do {
//     console.log(y);
//     y+=1;
// } while(y<=10);

// two property of loop 
// break & continue

// var x =1; 
//  while(x<=10){
//    if (x % 7 == 0){
//    break;
//    };
  
//   console.log(x)

//     x+=1;
//  }

// var i= 1;
// while (i<=10){
// if (i%7 ==0){
//   i = i+1;
//   continue;
// }
//   console.log(i);
//   i+=1;
// }

// unary oprators

// let m = 10;
// console.log(m);
// m--;
// console.log(m);

// functions

// function osama (){
//   console.log("my name is osama");
//   console.log("my name is LADENKHAN....")
//   console.log("my name is saif");

// }
// osama();


// function evenOrOdd (x){
//   if (x*4 ==16){
   
//     console.log("even")
//     return ;
//   }
  
// }
// let x = evenOrOdd(4)
//   console.log(x);

// array is type of obeject in array we put one and more than value in one particulaer times is called array;


// let x =  [200,"osama",null,undefined,2016]; /*this is empty array */
// console.log(x);

// console.log(x.length);


// collection of data is called object;

let x = {id:101,name:"osama",salary:15550};
console.log(x);

console.log(x.name);
x.osama = "ayas"
console.log(x);
delete x.osama;
console.log(x);
