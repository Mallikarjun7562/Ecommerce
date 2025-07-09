let btn=document.querySelector("#btn")
console.log(btn);

btn.onclick=function(){
    let ol=document.querySelector("ol")
    console.log(ol);
    let res=ol.classList.toggle(true)
    if(res){
        ol.style.transform="translatex(-250px)"
        ol.style.transitionDuration="2s"
    }else{
        ol.style.transform="translatex(0px)"
        ol.style.transitionDuration="2s"
    }
}

let demo=document.getElementsByClassName("bx-x")
console.log(demo[0]);

demo[0].onclick=function(){
    let ol=document.querySelector("ol")
    console.log(ol);
    ol.style.transform="translatex(-250px)"
    ol.style.transitionDuration="2s"
}