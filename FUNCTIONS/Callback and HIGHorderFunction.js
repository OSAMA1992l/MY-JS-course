// highOrder function when we pass function in function is called called high order function;

function h(x,fn){
    // above h is high order function
    // and fn is a call back
    // this code is synchromous code = when code define line by line is called synchromous code
    console.log(x*x);
    fn(x*x);
}
h(3,exac)

function exac(x){
    console.log("this is function",x)
}

// this is ansynchromous code below
console.log("Start")
setTimeout(function (){
    console.log("time is done1")
},3000)
setTimeout(function (){
    console.log("time is done2")
},0)
console.log("End..")

