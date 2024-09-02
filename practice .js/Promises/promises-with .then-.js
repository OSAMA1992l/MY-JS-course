const p1 = new Promise(function (res,rej){
    setTimeout(()=>{
        console.log("timer p1")
        res(100)
    },500)
})

const p2=p1.then(function a(){},function b(){});
const p3 = p1.then(function c(){},function d(){})