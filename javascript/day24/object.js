// by using literal way

// let obj={
//     name:"abhi",
//     id:10,
//     boolean:true,
//     null:null,
//     undefined:undefined,
//     bigint:10n,
//     arr:[10,20,30],
//     obj1:{
//         designation:'developer'
//     },
//     demo:function (){
//         console.log('hello-world');
//     }

// }
// console.log(obj);

// // by using constructor function

// let p1=new obj2('vicky',13)
// console.log(p1);
// function obj2(name,id){
//     this.name=name;
//     this.id=id;
// }


// methods

let obj={
    name:'vicky',
    id:13
}
console.log(obj);

// update existing value

obj.id=28
console.log(obj);

// add new key and value pair

obj.role='developer';
console.log(obj);

// delete key and value pair
delete obj.role
console.log(obj);

// to concat two objects assign()

let obj1={
    loacton:'hyd'
}
console.log(obj1);
Object.assign(obj,obj1)
console.log(obj);

// to convert it into arrays-->entries()
let obj2=Object.entries(obj)
console.log(obj2);

// seal()
// Object.seal(obj);
// obj.id=13
// console.log(Object.isSealed());

// obj.lastname='kumar'
// console.log(obj);

// freeze

Object.freeze(obj)
obj.lastname='kumar'
console.log(obj); 

console.log(Object.keys(obj));
console.log(Object.values(obj));
