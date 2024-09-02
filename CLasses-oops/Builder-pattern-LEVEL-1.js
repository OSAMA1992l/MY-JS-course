class product {

    constructor(builder){
this.price = builder.price;
this.category = builder.category
    }
}
let p = new product({
    name: "iphone 12",
    price:110919,
    category: "mobile",
})
console.log(p)  