function main(m,n) {
    setInterval(()=>{
        for(let i=m;i<=n;i++){
            console.log(i);
        }
    },5000)
}
function print(){
   setTimeout(()=>{
    for(let i=1;i<=1000;i++){
        console.log(i);
    }
   },1000)
}
main(1,10000)
print()
