// mudify variables is called mutability;
// un modify variable is called unmutability;
//  const is used for imutibilty values
// Object.seal; we can't delete and can't add new value but only update allowed
// Object.freeze we cant't delete and can't update and cant't add the value
const osama = {x:10,y:20};
Object.freeze(osama)
console.log(osama)
osama.y=33;
console.log(osama)
Object.isFrozen(osama)


// osama.{x:100}; reassign is not allowed in object
;
