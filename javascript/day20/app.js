// async fucntion demo(){
//     await
// }

// let demo=async function(){
//     await
// }

// let d1=async ()=>{
//     await
// }

let data=async ()=>{
    let res = await window.fetch("country.json")
    console.log(res);
    let data=await res.json()
    console.log(data);
    for(let ele of data){
        let demo=document.getElementById("demo")
        let demo2=document.getElementById("cntry")
        console.log(ele);
        let opt=`
        <option value=${ele.country}>${ele.country}<option/>
        `
        let opt1=`
        <option value=${ele.country}>${ele.country}<option/>
        `
        demo.innerHTML+=opt
        demo2.innerHTML+=opt1

    }

}
data()