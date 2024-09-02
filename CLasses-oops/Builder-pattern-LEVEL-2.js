// class product{
//     #name
//     #price
//     #discribtion

//     constructor(builder){
//         this.#name = builder.name
//         this.#price = builder.price;
//         this.#discribtion = builder.dicribtion
   
//     }

//  static get builder(){


//     class builder{
//         constructor(){
//          this.name="";
//          this.price=0;
//          this.dicribtion = "";   
//         }
//         setname(incommingName){
//             this.name =incommingName;
//             return this
//         }
//         setprice(incommingPrice){
//             this.price = incommingPrice;
//             return this
//         }
//         setdiscribtion(incommingDiscribtion){
//             this.discribtion =incommingDiscribtion;
//             return this
//         }
//         build(){
//             return new product (this)
//         }
//     }
//     return builder
//  }
// }

// const p = new product.builder()
// .setName("iphone")
// .setPrice(9090321)
// .setDiscribtion("apple i phone")

// console.log(p)


class product {
    #name
    #price
    #describtion

    constructor(builder){
       this.name= builder.name
       this.price = builder.price
       this.#describtion = builder.describtion
    }


    static get builder(){

        class builder{

        constructor(){
            this.name =  "";
            this.price =  0 ;
            this.describtion = "";
        }

        setname (name){
            this.name = name
            return this
        }
        setPrice (price){
            this.price = price
            return this
        }
        setDescribtion(describtion){
            this.describtion
            return this
        }
       
        build(){
            return new product(this)
        }
          

        }
        return builder
    }
}

let y = product.builder
               .setname("i phone 14 pro")
               .setPrice (870000)
               .setDescribtion("apple")
               
               console.log(y)