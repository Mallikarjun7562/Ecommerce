
// implict-type-casting

console.log(5+'5');
console.log(5+5);
console.log(5-'5');
console.log(5*'5');
console.log(5+'a');
console.log(5-'a');
console.log(typeof NaN); //number
console.log(NaN?true:false); //false
console.log(undefined?true:false); //false
console.log(null?true:false);
   

// explict-type-casting

console.log(5+Number('5'));
console.log(5+ String('5'));
console.log(Boolean(0));
console.log(Boolean(10));
console.log(Boolean(undefined));
console.log(Boolean(null));