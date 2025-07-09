// eg1

// function main(a)
// {
//     let c=a
//     return c

// }
// let demo=main(function(){
//     console.log("hello");

// })

// console.log(main);
// console.log(demo);
// demo()

//eg2

function main(a,b){
    console.log(a());
    console.log(b());
}
main(function(){
    return "java"},function(){
    return "web-tec"

})

// task...create a hof amd cbf to perform arithametic operation of two numbers

// note:- input should be given by end user
  

function arith(a,b,task){
    let c=task(a,b)
    return c
}
let add=arith(a=Number(prompt("enter a value")),b=Number(prompt("enter b value")),function(a,b){
    return a+b;

})
console.log(add);
let sub=arith(a=Number(prompt("enter a value")),b=Number(prompt("enter b value")),function(a,b){
    return a-b;

})
console.log(sub);
let mul=arith(a=Number(prompt("enter a value")),b=Number(prompt("enter b value")),function(a,b){
    return a*b;

})
console.log(mul);
let div=arith(a=Number(prompt("enter a value")),b=Number(prompt("enter b value")),function(a,b){
    return a/b;

})
console.log(div);
let mod=arith(a=Number(prompt("enter a value")),b=Number(prompt("enter b value")),function(a,b){
    return a%b;

})
console.log(mod);







