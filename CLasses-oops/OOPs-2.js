class product{

    #name;
    #price;
    catogory;
    #disceiption;
    rating;

constructor(productName,productPrice,productCatogory, productDiscribtion,productRating){
   
this.#name = productName 
this.#price = productPrice
this.catogory = productCatogory
this.#disceiption = productDiscribtion   
this.rating = productRating
}

setprice(p){
    if(p>0){
       this.#price = p;
    }else{
        console.log("invalid price")
    }
}

getprice(){
    return this.#price
}
 



    addToCart(){
     console.log("add to cart")
    }

    removeToCart(){
     console.log("remove to cart")
    }

    displayProduct (){
        console.log("display product", this)
    }

    buyProduct(){
        console.log("buy the product",this.#name,this.#price)
    }
}

let iphone = new product("iphone 11 pro max",150000,"electronics","mobile",  "4.5 star")

console.log(iphone)

iphone.setprice(1000)
iphone.buyProduct();
console.log(iphone.getprice())