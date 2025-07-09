


let btn=document.getElementById("btn")
btn.addEventListener("click",()=>{
    let ajax=new XMLHttpRequest()
    console.log(ajax);

    let srch=document.getElementById("srch").value
    ajax.open("GET",`https://pixabay.com/api/videos/?key=42523258-a04b6b031ebcdd0e5b3defe40&q=${srch}&pretty=true`)
   
    ajax.onload=()=>{
        console.log(ajax.response);
        let data=JSON.parse(ajax.response)  //converting into data
        console.log(data.hits);
        data.hits.map((res)=>{
            console.log(res.videos.medium.url);
            let demo=document.getElementById("demo")
            let vd=`<video src=${res.videos.medium.url} controls ></video>`
            demo.innerHTML+=vd
        })

    }

    ajax.send()
})
