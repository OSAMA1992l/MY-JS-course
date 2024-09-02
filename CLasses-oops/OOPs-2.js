
class product{
    #name;
    #price;
    Category;
    discription;
    rating;
    
    constructor(productName,productPrice,productCategory,productDiscribtion,productRating){
        this.#name = productName;
        this.#price = productPrice;
        this.Category =productCategory;
        this.discription = productDiscribtion;
        this.rating = productRating;
    }
    
    setprice(p){
        if(p > 0){
            return this.#price = p
        }
        else{
            return "invalid price";
        }
    }
    
    getprice(){
        return this.#price
    }
    
    get discription(){
        return this.discription
    }
    
    addtocart(){
        console.log('add to cart')
    }
    
    removeToCart(){
        console.log('remove to cart')
    }
    displayproduct(){
        console.log("display product")
    }
    buyProduct(){
        console.log("buy the product",this.#name,this.#price,this.Category,this.discription)
    }
    }
    
    let iphone = new product ("IPHONE 12",3000,"MOBILE","ELECTRONICS","4.5 rating");
    
    console.log(iphone)
    
    iphone.setprice (1000)
    
    iphone.buyProduct()
    console.log(iphone.getprice());
    
    iphone.discription = "sumsung"
    
    iphone.buyProduct()