// let ipt=document.getElementById("ipt")
// console.log(ipt.innerHTML);
let btn=document.getElementById("add")
console.log(btn);

btn.onclick=function(){

var inputValue = document.getElementById("ipt").value;
console.log( inputValue);

let dis=document.getElementById("dis")
console.dir(dis)
let p=document.createElement('p')
p.innerHTML=inputValue
dis.appendChild(p)
p.style.color="white"

dis.style.display="block"
let del=document.getElementById("delete")
console.log(del);

let edit=document.getElementsByClassName("edit")
edit.onclick=function(){
    
}
del.onclick=function(){
    dis.style.display="none"
}

}