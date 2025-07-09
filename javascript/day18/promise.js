let promise=new Promise(()=>{

})
console.log(promise);


function main(m,n){
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isNaN(m)||isNaN(n)){
                return reject()
            }
            for(let i=m;i<=n;i++){
                console.log(i);
            }
            return resolve();
        },5000)
        
    })
    .then(()=>{
        console.log("resolved successfully");
    })
    .catch(()=>{
        console.log("rejected finally...");
    })
}

main(1,'100')


function smple(){
    console.log("no`s will be printed soon..");
}
smple()
    