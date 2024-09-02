class product{

     static x=10
// static is associated with class
// we can't make private staic 
    constructor(name,price){
        this.name =name;
        this.price=price
    }
}

let y = new product()
console.log(y.x) 