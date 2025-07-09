let demo=document.getElementById("demo")
console.log(demo);

demo.addEventListener("click" , (e)=>{

    if(e.target.tagName==="BUTTON"){
        console.log("targeted...buttontag");
    }
})

let ol=document.querySelector("ol")
console.log(ol);

ol.addEventListener("click" , (e)=>{
    
    if(e.target.tagName==="LI"){
        console.log("li tag has been targeted..");
    }
})  