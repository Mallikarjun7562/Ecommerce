// to print content on web page

// document.write
// document.writeln

document.write("hello - world")
document.writeln("hello-world")
document.writeln("hello-world")
document.writeln("hello-world")
document.writeln("hello-world")
document.write("<h1> web-tech</h1>")

// direct access

console.log(document.URL);
console.log(document.baseURI);
console.log(document.doctype);
console.log(document.head);
console.log(document.title);

document.title="Apple😜"
console.log(document.body);

console.log(document.links);
console.log(document.links[0]);

// printing the links in the console if they are more than 10

let link=document.links
console.log(link);
console.log(link.length);
link[0].href="http://www.netlfix.com"

for(let i=0;i<link.length;i++){
    console.log(link[i]);
    link[i].className="demo"

}

link[0].setAttribute("target","self");
console.log(link[0].getAttribute("target"));
link[0].removeAttribute("target");
