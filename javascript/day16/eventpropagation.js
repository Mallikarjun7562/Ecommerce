let gp=document.getElementById("grand-parent")
console.log(gp);

gp.addEventListener("click", (e)=>{
    console.log("grand-parent clicked");
    console.log(e.target);
    e.target.style.backgroundColor="crimson"
    e.stopImmediatePropagation();
},false)
// false is the default value of the eventlistner if we don`t provide anything it takes false aas its default value. and 
// if false -->bubbling true--->capturing

let p=document.getElementById("parent")
console.log(p);

p.addEventListener("click", (e)=>{
    console.log("parent clicked");
    console.log(e.target);
    e.target.style.backgroundColor="violet"
    e.stopImmediatePropagation();
},false)

let c=document.getElementById("child")
console.log(c);

c.addEventListener("click", (e)=>{
    console.log("child clicked");
    console.log(e.target);
    e.target.style.backgroundColor="yellow"
    e.stopImmediatePropagation();
},false)

let p1=document.getElementById("prnt")
console.log(p1);

p1.addEventListener("click", (e)=>{
    let res=p1.classList.toggle(true)
    if(res){
    console.log("parent-1 clicked");
    console.log(e.target);
    e.target.style.backgroundColor="crimson"
    e.stopImmediatePropagation();
    }else{
    e.target.style.backgroundColor="white"

        e.stopImmediatePropagation();

    }
})

let c1=document.getElementById("child-1")
console.log(c1);

c1.addEventListener("click", (e)=>{
    let res=c1.classList.toggle(true)
    if(res){
    console.log("child-1 clicked");
    console.log(e.target);
    e.target.style.backgroundColor="yellow"
    e.stopImmediatePropagation();
    }else{
    e.target.style.backgroundColor="white"

        e.stopImmediatePropagation();
    }
})

let c2=document.getElementById("child-2")
console.log(c2);

c2.addEventListener("click", (e)=>{
    let res=c2.classList.toggle(true)
    if(res){
    console.log("child-2 clicked");
    console.log(e.target);
    e.target.style.backgroundColor="coral"
    e.stopImmediatePropagation();}
    else{
    e.target.style.backgroundColor="white"

        e.stopImmediatePropagation();
    }
})