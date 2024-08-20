class product{

    name;
    price;
    catogory;
    disceiption;
    rating;

constructor(productName,productPrice,productCatogory, productDiscribtion,productRating){
   
this.name = productName 
this.price = productPrice
this.catogory = productCatogory
this.disceiption = productDiscribtion   
this.rating = productRating
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
        console.log("buy the product")
    }
}

let iphone = new product("iphone 11 pro max",150000,"electronics","mobile",  "4.5 star")

console.log(iphone)

iphone.name ="vivio"

iphone.displayProduct();