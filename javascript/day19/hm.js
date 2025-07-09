window.fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then((data)=>{
    for(let ele of data){
        let tbl=document.getElementById("tbl")
        
        let tr=`
        <tr>
            <td>${ele.id}</td>
            <td>${ele.title}</td>
            <td>${ele.category}</td>
            <td><image src=${ele.image}></td>
            <td>${ele.price}</td>
        </tr>
        `
        tbl.innerHTML+=tr
    }
})