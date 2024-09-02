function exception(){

    const randomNumber = Math.floor(Math.random()*10)
    if(randomNumber%2==0){
        return randomNumber
    }
    else{
        throw "this is oddd numer"
    }
}


function caller(){

    try{

    console.log("this is risky code")
    const respone = exception
    console.log("this is riky code fine working",exception)
    }
    catch(somebody){
       console.log("bad luck server down")
       console.log(exception)
    }
}