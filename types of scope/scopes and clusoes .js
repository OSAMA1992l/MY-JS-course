// ther are two phases of java script code exution;
// 1phase = compile and scope resulation in compailer;
// 2phse = where coe is exute in interpreted;
// types of scope in js 
// 1. global scope = is out side of function and block 
// 2.function scope = in side of function;
// 3. block scope  = inside in block ;

// var we used in global scope and function scope;
// let we used in block scope;
// const we used in nlock scope;

// LHS =  when we assign the value is called LHS;
// RHS = when we consume the value RHS;

var teacher = "osama khan"

function h(){
  var subject = "computer science"
    console.log(teacher,subject)
}
h()