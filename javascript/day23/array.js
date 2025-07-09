// by using literal way

// let arr=[10,'hello',true,undefined,null,1n]
// console.log(arr);

// // by using  new keyword

// let arr1=new Array(10,20,30,40)
// console.log(arr1);

// methods

let arr=[10,20,30,40,50]

console.log(arr.length);
// /indexOf
console.log(arr.indexOf(20));

// unshift()
arr.unshift(1,2)
console.log(arr);

// /shift()
arr.shift()
console.log(arr);

// push()
console.log(arr.push(100,200));
console.log(arr);

// pop()
console.log(arr.pop());
console.log(arr);

// slice()
console.log(arr.slice(0,3));

// splice
console.log(arr.splice(2,3,'hello'));
console.log(arr);

// reverse
console.log(arr.reverse());

// join
console.log(arr.join(' + '));
console.log(arr);

// concat
console.log(arr.concat(10,20,30));

// sort
console.log(arr.sort());
arr.pop()
arr.sort((a,b)=>{
    return a-b
})
console.log(arr);

// include
console.log(arr.includes(10));

// isArray
console.log(Array.isArray(arr));

// from()
let str='hello world'
console.log(Array.from(str));

// foreach

console.log(arr);
arr.forEach((i,v)=>{
    console.log(`${i}--->${v}`);
})

// filter()

let a=arr.filter((ele)=>{
    return ele >2
})
console.log(a);

// map
let b=arr.map((ele)=>{
    return ele+10;
})
console.log(b);

// reduce
let c=arr.reduce((acc,li)=>{
    return acc+li
})
console.log(c);