// by using literal way

let str ='hello'
console.log(str);
console.log(typeof str);

// by using new keyword

let str1=new String("hello")
console.log(str1);
console.log(typeof str1);

// methods of strings
let s="Hello world"

console.log(s.length);
console.log(s.indexOf('l'));
console.log(s.charAt(2));
console.log(s.charCodeAt(2));
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.toLocaleLowerCase());
console.log(s.toLocaleUpperCase());
console.log(s.split(''));
console.log(s.split(' '));
console.log(s.split('& '));
console.log(s.slice(0,4));
console.log(s.slice(-4,-1));
console.log(s.substring(0,4));
console.log(s.substr(0,4));
console.log(s.startsWith('h'));
console.log(s.endsWith('d'));
console.log(s.trim());
console.log(s.repeat(3));
console.log(s.concat(" i am."));

console.log(s.split('').reverse().join(""));