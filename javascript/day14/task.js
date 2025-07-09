let img=document.getElementById("img")
console.log(img);

let btn=document.getElementById("btn")

btn.onclick= function(){
    let display=img.classList.toggle(true)
    if(display){
        img.setAttribute("src","https://cdn.pixabay.com/photo/2023/11/26/22/39/dancer-8414379_640.jpg")
    }else{
        img.setAttribute("src","none");
    }
}