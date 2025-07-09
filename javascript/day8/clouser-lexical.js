// this keywor

// console.log(this);
// console.log(window);

// var a=13
// let b=28
// function demo() {
//     var a="hello world"
//     let b="java"
//     console.log(a);
//     console.log(b);
//     console.log(this.a);
//     console.log(this.b); //undefined
// }
// demo()

// nested-function

function parent() {
    let a=10
    function child() {
        console.log(a);
    }
    return child
}
parent()()

function p1() {
    function ch1() {
        console.log("i am child1");
        function ch1_1() {
           console.log("i am child of child1----child1_1"); 
        }
        return ch1_1
    }
    function ch2() {
        console.log("i am child 2");

    }
    return [ch1,ch2]

}
let rs=p1()
rs[0]()()
rs[1]()