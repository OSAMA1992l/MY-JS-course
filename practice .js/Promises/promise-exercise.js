function download(url){
    return new promise (function exac(){
     
console.log("starting download")
setTimeout(()=>{
    let data = "some data from"+url
    console.log("downloaded data from",url)
    res(data)
},3000)


    })
}
download("www.xyz")
.then(function f(value){
console.log("downloaded data",value)
})
