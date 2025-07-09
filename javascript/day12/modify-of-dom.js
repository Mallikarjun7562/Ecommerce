// let a=document.body
// a.innerHTML+="<h2>Hello world</h2>"

// a.innerHTML+="v "
// let d=document.querySelector("div")
// console.log(d);
// d.innerHTML+=`<ol>
// <li>Java</li>
// <li>Web-Tech</li>
// </ol>`


// createelementMethod

let h2=document.createElement("h2")
h2.textContent="Java-Script"
document.body.appendChild(h2)

let div=document.querySelector("div")

let ol=document.createElement("ol")
div.appendChild(ol)
console.log(div);
let li1=document.createElement("li")
li1.textContent="Web-tech"
ol.appendChild(li1)

let li2=document.createElement("li")
li2.textContent="Java-Script"

ol.append(li2)