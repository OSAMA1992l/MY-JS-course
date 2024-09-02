let pr = new Promise ( function (res,rej){
    console.log("Excuter callback trigged by promises constructor")

    const  randomNumber = Math.floor(Math.random()*10)
    console.log("this is ",randomNumber)
   
   setTimeout(()=>{
    if(randomNumber % 2===0){
        //   randomNumber even
        res(randomNumber)
        }
        else{
            rej(randomNumber)
            // randomNumber odd
        }

        console.log("hello osama")


   },1000)


})

// console.log("cvreated promises")
console.log(pr)