let globe=document.querySelector("#globe")
console.log(globe);

globe.addEventListener("click",()=>{
    let res=globe.classList.toggle(true)
    let body=document.getElementById("body")
    if(res){
        body.style.visibility="visible"
        body.style.transform="translateY(-350px)"
        body.style.transitionDuration="1s"
    }
    else{
        body.style.visibility="hidden"
        body.style.transform="translateY(350px)"
        body.style.transitionDuration="0.5s"
    }

})

let cross=document.querySelector("#cross")
console.log(cross);

cross.onclick=()=>{
    let res=cross.classList.toggle(true)
    let body=document.getElementById("body")
     if(res){
        body.style.visibility="hidden"
        body.style.transform="translateY(350px)"
        body.style.transitionDuration="0.5s"
     }
}

let menu=document.querySelector("#menu")
console.log(menu);

menu.onclick=()=>{
    let res=menu.classList.toggle(true)
    let div=document.getElementById("div")
    if(res){
        div.style.display="block"
    }
    else{
    div.style.display="none"
    }
}

window.fetch("country.json")
.then((res)=>res.json())
.then((data)=>{
    for(let ele of data){
        let country=document.querySelector("#country")
       let option=`
        <option>${ele.country}</option>
       `
       country.innerHTML+=option
    }
})

let signup=document.getElementById("signup")
console.log(signup);

signup.addEventListener("click",()=>{
    let res=signup.classList.toggle(true)
    let div1=document.getElementById("div1")
    let div=document.getElementById("div")
    if(res){
        div1.style.display="block"
        div1.style.transform="translateY(-350px)"
        div1.style.transitionDuration="5s"
        div.style.display="none"
    }
    else{
        div1.style.display="none"
        div1.style.transform="translateY(350px)"
        div1.style.transitionDuration="0s"
    }
})

let cross1=document.querySelector("#cross1")
console.log(cross);

cross1.onclick=()=>{
    let res=cross1.classList.toggle(true)
    let div1=document.getElementById("div1")
    let div=document.getElementById("div")
     if(res){
        div1.style.display="none"
        div.style.display="none"
     }
}
let login=document.getElementById("login")
console.log(login);

login.addEventListener("click",()=>{
    let res=login.classList.toggle(true)
    let div2=document.getElementById("div2")
    let div=document.getElementById("div")
    if(res){
        div2.style.display="block"
        div2.style.transform="translateY(-350px)"
        div2.style.transitionDuration="5s"
        div.style.display="none"
    }
    else{
        div2.style.display="none"
        div2.style.transform="translateY(350px)"
        div2.style.transitionDuration="0s"
    }
})

let cross2=document.querySelector("#cross2")
console.log(cross);

cross2.onclick=()=>{
    let res=cross1.classList.toggle(true)
    let div2=document.getElementById("div2")
    let div=document.getElementById("div")
     if(res){
        div2.style.display="none"
        div.style.display="none"
     }
}



