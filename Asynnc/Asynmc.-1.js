async function osama() {

let p1 = new Promise((resolve,reject)=>{
    let x =1000
    if(x==100){
        resolve("this is fullfilled")
    }
    else{
        reject("this is rejected")
    }
})

try{
    let y = await p1;
    console.log(y)
}
catch(err){
    console.log(err)
}

}
  
osama()
