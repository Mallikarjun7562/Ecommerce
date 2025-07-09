let vd=document.getElementById("vd")
console.log(vd);
// vd.style.pointer="hand"

vd.onclick=function(){
    let display=vd.classList.toggle(true)
    if(display){
        vd.play()
    }else{
        vd.pause()
    }
}

let btn2=document.getElementById("btn2")

btn2.onclick=function(){
    let display=vd.classList.toggle(true)
    if(display){
        vd.play()
        btn2.innerHTML="Play"
    }else{
        vd.pause()
        btn2.innerHTML="Pause "
    }
}