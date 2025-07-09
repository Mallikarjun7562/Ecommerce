// way-1

// function demo() {
//     console.log("hello-sekhar & Gang");
// }
// // way2
// let btn=document.getElementById("btn")
// btn.onclick=function(){
//     console.log("hello -sekhar...");
// }

// example

// let a=window.prompt("enter any color")

// let btn1=document.getElementById("btn1")
// console.log(btn1);

// btn1.innerHTML=`${a}`

// btn1.onmouseover= function(){
//     document.body.style.backgroundColor=`${a}`
//     document.body.style.transition="ease all 3s"
//     btn1.style.backgroundColor=`${a}`
//     btn1.style.transition="ease all 5s"
//     btn1.style.borderRadius="7.5px"
//     btn1.style.color="white"
   
//     btn1.style.height="40px"
//     btn1.style.width="100px"

    
// }

// example-----2-------------------------->

let btn2=document.getElementById("btn2")
console.log(btn2);

btn2.onclick=function(){
    let res=Math.round(Math.random()*100000).toString(16);
    console.log(res);
    document.body.style.backgroundColor=`#${res}`
}

let demo=document.getElementById("demo")
console.log(demo);

demo.onkeydown=function(){
    let ks=Math.round(Math.random()*100000).toString(16);
    console.log(ks);
    document.body.style.backgroundColor=`#${ks}`
}