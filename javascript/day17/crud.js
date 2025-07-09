let form=document.getElementById("form")
console.log(form);

let main=document.querySelector("#main")
console.log(main);

let demo=document.querySelector("#demo")
console.log(demo);

form.addEventListener("click", (e)=>{
    e.preventDefault();
    if(e.target.innerHTML==="add"){
        main.innerHTML+=`
            <p>${demo.value}</p>
            <button>delete</button>
            <button>edit</button>
            `
            demo.value=""
    }
    if(e.target.innerHTML==='delete'){
        e.target.parentElement.remove();
    }

    if(e.target.innerHTML==='edit'){
        demo.value=e.target.previousElementSibling.previousElementSibling.innerHTML
        e.target.innerHTML='update'
    }

    if(e.target.innerHTML==='update'){
        e.target.previousElementSibling.previousElementSibling.innerHTML=demo.value
    }
})