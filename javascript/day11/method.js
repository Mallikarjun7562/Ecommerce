// let a=document.getElementById("demo")
// console.log(a);
// a.style.border="2px solid"
// a.style.backgroundColor="crimson"

// console.dir(a)
// console.log(a.children);

// a.children[0].textContent="Web-tec"
// a.children[0].style.color="white"

// a.children[1].textContent="Java"
// a.children[1].style.color="white"
// a.children[2].textContent="SQL"
// a.children[2].style.color="white"

// // console.log( a.childNodes);
// // a.childNodes[6].textContent="java"

// console.log(a.lastElementChild);
// console.log(a.lastElementChild.nextSibling);
// a.lastElementChild.nextSibling.textContent="hello world"

// element by classname

let b=document.getElementsByClassName("demo1")
console.log(b);

console.log(b[0]);
b[0].style.backgroundColor="aqua"

b[1].textContent="React-Js"


// element by tagname

let c=document.getElementsByTagName("ol")
console.log(c);

console.log(c[0].children);

c[0].children[2].style.border="2px solid crimson"
// parentElement tag---> which tells us the parent of the children
// diff b/w parent node and parent element is that if use .parentelement it will goes upto html tag only but
// if we use parentnode we can moove upto doctype....it is also known as traversal...
console.log( c[0].children[2].parentNode.parentNode.parentNode.parentNode);

console.log(c[0].children[1].nextElementSibling);

// -------------------------------->
// element by name

let j=document.getElementsByName("demo2")
console.log(j);
console.log(j[0]);
j[0].style.backgroundColor="black"
j[0].style.color="red"

// ----------------------------->
// QuerySelector & QuerySelectorAll

let f=document.querySelector("#demo")

let g=document.querySelectorAll("#demo")

console.log(f); console.log(g);

let h=document.querySelector(".demo1")
let i=document.querySelectorAll(".demo1")
console.log(i);
console.log(h);


let l=document.querySelector("*")
console.log(l);
let k=document.querySelectorAll("*")
console.log(k);
console.log(k[4].textContent="Netflix");
