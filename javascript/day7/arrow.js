// implict-return arrow function

let demo=_=> console.log("hello");
console.log(demo);
demo()

//explicit-return arrow function

let demo1=_=>{
    return 'hello'
}
console.log(demo1);
console.log(demo1());

//create a hof and cbf using arrow function


 let main=(a)=>{
    let b=a() 
    return b

}
// console.log(main);

let c=main(function(){

    return'iam cbf'
})
console.log(c); 