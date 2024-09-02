function fun(c,d){
   let m =10

    function gun(){
        let x= 90
        console.log("additon of",m+c)
        return gun()
    }
}
let v = fun(10,10)
console.log(v)
