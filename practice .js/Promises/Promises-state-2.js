let pr = new Promise ( function (res,rej){
    console.log("Excuter callback trigged by promises constructor")

    const  randomNumber = Math.floor(Math.random()*10)
    console.log("this is Number",randomNumber)
    if(randomNumber % 2===0){
    //   randomNumber even
    res()
    }
    else{
        rej()
        // randomNumber odd
    }
})

// console.log("cvreated promises")
console.log(pr)