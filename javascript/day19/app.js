// let obj={
//     name:"vikram",
//     id:13
// }
// console.log(obj);
// obj=JSON.stringify(obj)
// console.log(obj);

// obj=JSON.parse(obj)
// console.log(obj);

window.fetch("data1.json")
.then(res =>res.json())
.then((data)=>{
    console.log(data);
    for(let ele of data){
        let demo=document.getElementById("demo")
        console.log(demo);
        let tr=`
        <tr>
        <td>${ele.name}</td>
        <td>${ele.id}</td>
        <td><img src=${ele.img} ></td>
        </tr>
        `
        demo.innerHTML+=tr
    }
})