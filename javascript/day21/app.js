// create a ajax using new keyword and xmlhttprequest()

let ajax=new XMLHttpRequest()
console.log(ajax);

ajax.open("GET","https:fakestoreapi.com/products")

ajax.onload=()=>{
    console.log(ajax);
    console.log(ajax.status);
    console.log(ajax.response);
    let data=JSON.parse(ajax.response)
    console.log(data);
    data.map((res)=>{
        let tbl=document.getElementById("tbl")
        console.log(res);
       let tr= `<tr>
        <td>${res.id}</td>
        <td>${res.title}</td>
        <td><img src=${res.image} /></td>
       </tr>`
       tbl.innerHTML+=tr
    })
}
ajax.send()