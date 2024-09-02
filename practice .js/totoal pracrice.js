// array  
// let arr1 = [null,undefined,"osama",80]
// let arr2 = [undefined,null,"khan",90]
// // console.log(arr1.concat(arr2))
// // console.log(arr1.length)
// // console.log(arr1.slice(1,3))
// let arr3 =(arr2.splice(0,3))
// // console.log(arr3)
// arr1.shift()
// console.log(typeof(arr1))

//   function are d/f types
// anynomous function = not a name and identity is called nynomous funvtion its put in vaeiables
// let x = function(x){
//     // console.log(x*x) Example of anynomous function
// }
// (5)

// (function fn(x){
//     // console.log(x+x) Example of imediatly involve function
// }(5))

// high order function = function whose take a function like a srgument is called highh order function
// function osama (x,fn){
// console.log(x*x)
// fn(x+x)
// }
// osama(5, function(x){   
//     // console.log("valu of x is",x) example of high order function
// })
// call back call a high order function we take the name of function is callled Call back

//   {Object}


// Classes are blue print of Object
// After making class final project is = Object

// class product{
// #name
// #price
//     constructor(builder){
//         this.#name = builder.name
//         this.#price=builder.price
//         this.category = builder.category
//         this.describtion = builder.describtion
//     }

//     buyProduct(){
//         console.log("buy the product")
//     }
//     addToCart(){
//         console.log("ADD to cart",this)
//     }
//     removeToCart(){
//         console.log("remove to cart")
//     }
// }

// // getprice(price);{
// //     console.log(this.#price)
// // }
// const  iphone = new product ({
//     name:"i phone",
//     price: 90000,
//     category: "mobile",
//     describtion: "Apple"
// })

// console.log(iphone)
// iphone.addToCart()

// function subtraction(){
//     console.log(100-50)
// }
// setTimeout(subtraction,3000)

// console.log("hello")
// function multiply(){
//     console.log(30*30)
// }
// setTimeout(multiply,1000)
// console.log('End..')

// let timer = 60;

// function osama(){
//     timer++
//     console.log(timer)
//     if(timer== 10){
//         clearInterval(interval)
//     }
// }
// let interval=setInterval(osama,1000)

// function add(num1,num2){
// return num1+num2
// }

// function outer(add){
//     return add(20,30)
// }

//   [[Making of arra]]
// let arr1 = [null,undefined,"osama",90,30]
// let arr2 = [1,2,3,4,5,5];

// // let arr3 = [arr1.concat(arr2)]
// // console.log(arr3)
// arr1.unshift(34)
// console.log(arr1)
// console.log(arr1.length)
// console.log(typeof(arr1))

// // console.log(outer(add))

// function inerr( val_1, val_2){
//     return val_1+val_2}
//      function outer(inerr){
//       return inerr(2,4)
//      }
   
  
//   console.log(outer(inerr))
//    [Object]

// let product = {name:"i phone 14",price:30000,categoty:"mobile",describtion:"apple"}
// console.log(Object.isFrozen(product))

// class product{
// #name
// #price

//     constructor(builder){
//         this.#name = builder.name
//         this.#price = builder.price
//         this.category = builder.category
//         this.describtion = builder.describtion
//     }


// setname(n){
//     this.#name=n
// }


// getname(){
//     return this.#name
// }


//    setprice(p){
// this.#price=p
//    }

//    getprice(){
//     return this.#price
//    }

//     buyProduct(){
//         console.log("buy the product")
//     }
//     addToCart(){
//         console.log("add to cart",this.#name,this.#price,this.category,this.describtion)
//     }
//     removeToCart(){
//         console.log("remove from Cart")
//     }
// }

// let iphone = new product({
//     name:"iphone 14 pro.",
//     price:90000.,
// category:"mobile.",
// describtion:"Apple."
// });


// console.log(iphone);
// // console.log(iphone.addToCart())
// iphone.setprice(188000)
// console.log(iphone.getprice())
// iphone.setname("realme")
// console.log(iphone.getname())

// class product{
// #name
// #price

//     constructor(builder){
//         this.#name = builder.name
//         this.#price= builder.price
//         this.category = builder.category
//         this.describtion = builder.describtion
//     }

// setname(name){
//     this.#name=name
// }

// getname(){
//    return this.#name
// }



// setprice(price){
//     this.#price = price
// }

// getprice(){
//     return this.#price
// }

//     AddToCart(){
//         console.log("Add to cart",this)
//     }
//     removeToCart(){
//         console.log("remove from the cart")
//     }
// }

// let iphone = new product({
//     name: "iphone 14 pro max...",
//     price:10000,
//     category:"mobile..",
// describtion: "apple..",
// })
// // console.log(iphone)
// console.log(iphone.AddToCart())
// iphone.setprice(900000)
// console.log(iphone.getprice())
// iphone.setname("vivo")
// console.log(iphone.getname())

// class product{

// #name
// #price

//     constructor(builder){
//       this.#name = builder.name
//       this.#price =builder.price
//       this.category =builder.category
//       this.describtion = builder.describtion
//     }

// setprice(price){
//     this.#price=price
// }

// getprice(){
//    return this.#price
// }


// setname(name){
//     this.#name=name
// }

// getname(){
//     return this.#name
// }

//     addToCart(){
//         console.log("add to cart",this.#name,this.#price,this.category,this.describtion)
//     }

// }

// var iphone = new product({
//     name:"iphone 14 pro max",
//     price:10000,
//     category:"mobile",
//     describtion:"Mobile"
// })
// console.log(iphone)
// console.log(iphone.addToCart())
// iphone.setprice(50000)
// console.log(iphone.getprice())

// iphone.setname("vivo")
// console.log(iphone.getname())
// console.log(iphone.addToCart())

//  [amking of array and its function] = aray collection of values

// var arar1 = [20,30,40,null,undefined]
// // var arar2 = [50,60,70,80]
// // console.log(arar1.concat(arar2))
// console.log(arar1.length)
// arar1.shift()
// console.log(arar1.slice(0,5))
// // var arar2 = (arar1.splice(0,4))
// // console.log(arar2)

//  making of object {}
// var product = {name:"iphone14 pro max",price:10000,category:"mobile"}
// Objectis clear 


// class is blue print of object final prodwct making class is called = object

// class also complete

// class product{
// #name
// #price

//     constructor(builder){
//         this.#name = builder.name
//         this.#price = builder.price
//         this.category = builder.category
//         this.describtion = builder.describtion
//     }


// setprice(price){
//     this.#price=price
// }
// getprice(){
//    return this.#price
// }


// setname(name){
//     this.#name = name
// }

// getname(){
//     return this.#name
// }
//     addToCart(){
//         console.log("add to cart",this.#name,this.#price,this.category,this.describtion)
//     }
//     removeToCart(){
//         console.log("remove from the cart")
//     }

//     buyProduct(){
//         console.log("buy the product")
//     }
// }

// var iphone = new product({
//     name:"iphone 12 pro max...",
//     price:10000,
//     category:"mobile",
//     describtion:"Apple"
// })

// console.log(iphone)

// iphone.setname("vivo")
// console.log(iphone.getname())
// console.log(iphone)

// iphone.setprice(300);
// console.log(iphone.getprice())
// console.log(iphone.addToCart())


// sunchronous = when java script use own function is called synchrousn and excude line by line is calle dsynchronous
// asynchrnous = when java script use run time wnviromebnt to rin asynchronouds code ans this not ecxute line by line 

// example of synchronous code

// function fn(x,os){
//     console.log(x*x)
//     os(x+x)
// }
// fn(5,function(x){
//     console.log("this a function",x)
// })

// function fn(x){
//     console.log(x*x)
// }
// fn(4,os)

// function os(x){
//     console.log(x)
// }
// os(3)

// above example of a synchronous tast


// asunchronous

// function fn(){
//     console.log("show dahbord")
// }

// setInterval(fn,3000)

// function myFunction(msg,x){
//     console.log(msg,x)
// }

// myFunction("i love js","osama")
// const sum = (a,b)=>{
//     console.log(a+b)
// }
// sum(5,7)

// const multiply=(x,y)=>{
// return x*y;
// }
// multiply(10,10)

    //   [Arrays]

    // let arr1 = [1,2,3,4,5]
    // // let arr2 =[6,7,8,9,10]
    // // console.log(arr1.concat(arr2))
    // console.log(arr1)
    // arr1.shift()
    // console.log(arr1)
    // console.log(arr1.slice(1,2))
    // let arr2 =[arr1.splice(0,4)]

    //  making of Object
    let product = {name:"iphone 14 ro max",price:10000,category:"moile"}

//     class product{
//     #name
//     #price
//         constructor(builder){
//             this.#name = builder.name
//             this.#price = builder.price
//             this.category = builder.category
//         }

//        setname(name){
//         this.#name=name
//        }
//        getname(){
//         return this.#name
//        }



//         setprice(price){
//             this.#price=price
//         }
//         getprice(){
//             return this.#price
//         }

//         buyProduct(){
//             console.log("buy the product",this.#name,this.#price,this.category)
//         }
//     }


//     var iphone = new product({
//         name:"iphone 14 pro max",
//         price:10000,
//         category :"mobile"
//     })
  
// iphone.setprice(2)
// console.log(iphone.getprice())
// iphone.setname("vivo v21...")
// console.log(iphone.getname())
// console.log(iphone.buyProduct())
   


// function fn(){
//     console.log("osama")
// }
// fn()
// setInterval(fn,1000)

// let m=(x,y)=>{
//    return (x*x)
// }
// let y = m(10,10)
// console.log(y)

// function countvovels(x){
// let count=0;

// for(const char of x){
//     let count =0;
//     if(char ==="a"||
//         char ==="e"||
//         char==="i"||
//         char==="o"||
//         char==="u"
//     ){
//         count++
//     }
// }
// console.log(count)
// }
// countvovels("apna college")
// let arr1 = ["osama","khan","kaithwara"]

// arr1.forEach(function fn(x,ok,arar1){
//     console.log(x,ok,arr1)
// })

// let arr = [2,3,4,66]



// var m=arr.reduce(function(result,current){
//    return result+current
// })
// console.log(m)
// let m = arr.filter(function (val){
//        return val>3
// })

// console.log(m)
// let y= arr.map(function(val){
//     return val*val
// })
// console.log(y)

// arr.forEach(function (num){
// console.log(num*num)
// })

// function osama(){
// let i=0

// while(i>=10){
//     console.log(i)
//     i++
// }

// }
// setInterval(osama,10)


// 


// var  timer=0

// function add(){
//    timer<=50;

//    if(timer===50){
//     clearInterval(set)
// }
//     timer++
//     console.log(timer)
// }
// var set = setInterval(add,10)

// function fn(){
// for(let i=0;i<=10;i++){
// console.log("osama")
// }

// if(i===10){
//     clearInterval(x)
// }

// }

// let x = setInterval(fn(),1000)

// console.log(x)


// let score = undefined

// console.log(typeof score)
// let numbervalue = Number(score)
// console.log(typeof(numbervalue))
// console.log(numbervalue)

// let value = 1

// let convert= Boolean(value)
// console.log(convert)

let sum = '333'

let convert = Boolean(sum)
console.log(convert)
console.log(typeof(convert))