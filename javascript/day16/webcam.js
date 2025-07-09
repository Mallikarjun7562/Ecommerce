let cam=document.getElementById("click")
console.log(cam);

cam.addEventListener("click",()=>{
    let vc=document.getElementById("demo")
    console.log(vc);
    
    // window.navigator.mediaDevices.getDisplayMedia()
    window.navigator.mediaDevices.getUserMedia({
        audio:true,
        video:{height:400 , width:400}
    })
    .then((stream)=>{
        vc.srcObject=stream;
        vc.play();
    })
    .catch(()=>{
        window.alert("Please allow the camera access")
    })
})