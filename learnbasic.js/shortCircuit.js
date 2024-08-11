
// js short curcuit 

// there are two important defination in short curcuit
// (1) truthy values..= left of falsy values all are truthy values..
// (2)  falsy values = 0,-0,+0,null,indefined,"empty",false


// (1)  and (&&);
// (2)  or (||);
// console.log(78 && -0);  "this is and operators"

// console.log(90 || -0);   "this is your or operator"

console.log(54 && -0);
console.log("" && 89)

console.log(90||70);
console.log(-0||90);