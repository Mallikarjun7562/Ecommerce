let fm=document.forms
console.log(fm);

fm[0].style.backgroundImage="url(https://cdn.pixabay.com/photo/2023/11/09/11/50/cat-8377169_1280.jpg)";
fm[0].style.height="200px";
fm[0].style.width="200px";
fm[0].style.backgroundAttachment="fixed"
fm[0].style.backgroundSize="cover";


fm[0].onsubmit=(e)=>{
    e.preventDefault()
    let name=fm[0].children[1];
    console.log(name);
    let pass=fm[0].children[4];
    console.log(pass);
    console.log(name.value,pass.value);
    if(name.value==="vikram" && pass.value==="Vicky@1234"){
        window.open("http://www.youtube.com")
    }
    else{
        window.alert(`error meessage....
        you have entered wrong username or password....`)
        window.location
    }

    
}
// create two html file one is login.html it should a feilds like text ,pwd and submit button
//  another one is home.html file navbars,bakcgroundimages when evr the input feild is correct then it should open home page

// 1.prompt("enter your fav color")---blue
// in webpage button the valueshould be as blue
