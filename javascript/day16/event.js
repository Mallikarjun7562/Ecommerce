let btn=document.getElementById("btn")
console.log(btn);

btn.addEventListener("click",(e)=>{
    console.log(e);
    let demo=document.getElementById("demo").value
    console.log(demo);
    window.navigator.clipboard.writeText(demo)
    .then(()=>{
        window.alert("content copied")
    })
    .catch(()=>{
        window.alert("failed to copy the content")
    })
})