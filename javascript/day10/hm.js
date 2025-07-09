let bt=document.forms
console.log(bt);
let a=prompt("enter a color");
// bt[0].style.backgroundImage="url(https://cdn.pixabay.com/photo/2023/11/09/11/50/cat-8377169_1280.jpg)"
bt[0].style.backgroundSize="cover"
// bt[0].style.backgroundRepeat="norepeat"
let k=bt[0].children[0]
console.log(k);
k.style.height="40px"
k.style.width="100px";
k.style.borderRadius="10px"
k.style.backgroundColor=`${a}`
k.style.color="white"
k.textContent=a
k.onclick = (e)=>{
    e.preventDefault()
    document.body.style.backgroundColor=`${a}`
    k.style.backgroundColor="black"
}



