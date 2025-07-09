function demo(a,...b){
    console.log(a);
    console.log(b);
}
demo(10,20,30,4);

let str="hello"
console.log(str);
console.log(...str);
console.log([...str]);

let arr=[10,20,30,40,50]
console.log(arr);
console.log(...arr);

// object destructuring

let obj={
    name:'vicky',
    id:13
}
console.log(obj);
let {name}=obj
console.log(name);

let {id,roll='not found'}=obj
console.log(id);
console.log(roll);

// array-->destructuring

let arr1=[10,20,30,40,50,60]
let [a,...b]=arr1
console.log(a);
console.log(b);

// rest-parameter

let {...c}=obj
console.log(c);
console.log(c.name);
console.log(c.id);
console.log(c.roll);

// spread-operator----shallowcopy

let m=[10,20,30,40,40]
console.log(m);

let n=m
console.log(n);
m[5]=70
console.log(m);
console.log(n);

// deep copy
let cd=[10,2,30,40,50,50,60,]
console.log(cd);
let md=[...cd]
console.log(md);
cd[7]=909
console.log(cd);
console.log(md);