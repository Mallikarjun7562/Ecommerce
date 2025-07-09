let btn=document.getElementById("btn");

btn.addEventListener("click" , ()=>{
    let srch=document.getElementById("srch").value

    let main=document.getElementById("demo")
    window.fetch(`https://pixabay.com/api/?key=42523258-a04b6b031ebcdd0e5b3defe40&q=${srch}&image_type=photo&pretty=true`)
    .then(res=>res.json())
    .then((data)=>{
        console.log(data.hits);
        for(let ele of data.hits){
            console.log(ele.previewURL);
            let img=`
            <img src=${ele.previewURL} />
            `
            main.innerHTML+=img
        }
    })
})
