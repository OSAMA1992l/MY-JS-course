console.log("START")

const p1 = new Promise(function (){
    console.log("Excuter call back trigged by promise constructor p1")
    setTimeout(function (){
   console.log("timer of p1 done")
},1000)
})

p1.then (function s(){"s"},function m(){"m"})

setTimeout(function(){
console.log("Timer 1 is done")
},3000)

const pr = new Promise (function (res,rej){
    console.log("Excuter callback trigged by promises constructor 2")

    const  randomNumber = Math.floor(Math.random()*10)
    console.log("randomNumber is ",randomNumber)
   
   setTimeout(()=>{
    if(randomNumber % 2===0){
        //   randomNumber even
        res(randomNumber)
        }
        else{
            rej(randomNumber)
            // randomNumber odd
        }

console.log("timer 2 is done")

   },4000)


})

pr.then(function f(x){console.log("excuting resolve 1",x)},function g(x){console.log("excuting reject",x)});

pr.then(function h(x){console.log("excuting resolve 2",x)},function i(x){console.log("excuting reject",x)});
for(let i=0;i<1000000;i++){}
for(let i=0;i<1000000;i++){}

console.log("END...")