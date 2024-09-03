// function* mygenrator(){
//     yield 1000;
//     yield 299;
//     yield 600;
//     yield 400;

// }

// let  i =mygenrator()
// console.log(i.next())
// console.log(i.next())
// console.log(i.next())
// console.log(i.next())
// console.log(i.next())
// console.log(i.next())

// let p1 = new Promise ((resolve,reject)=>{
//     let x = 10;
    
//     if(x==100){
//         resolve("this condition is resolved")
//     }else{
//         reject("this is condition is rejected")
//     }
    
//     });
    
//     p1.then((res)=>console.log(res))
//     p1.catch((rej)=>console.log(rej))

 async function  handlePromise(){
let p1 = new Promise ((resolve,reject)=>{

    let x =10;

    if(x==10){
        resolve("ths is resolved function")
    }else{
        reject("this is unction is rejected")
    }

try{
    let osama = await p1;
   return os
}
catch(err){
    console.log(err)
}

})

}
handlePromise()