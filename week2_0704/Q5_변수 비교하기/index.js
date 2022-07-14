//https://velog.io/@filoscoder/-%EC%99%80-%EC%9D%98-%EC%B0%A8%EC%9D%B4-oak1091tes

let a = 10; //number
let b = "10"; //string
document.write(a == b); //true : 값만 비교
document.write("<br>");
document.write(a != b); // false
document.write("<br>");
document.write(a === b); //false : 값과 자료형까지 판단
document.write("<br>");

console.log(typeof a); // expected output: "number"
console.log(typeof b); // expected output: "string"


// 1. ==, ===
let c = 0; //num
let d = false; //boolean
document.write(c == d);  //true
document.write(c === d);  //false
document.write("<br>");

// 2. !=, !== : ==, ===으로 생각하고 뒤집어준다.

document.write(c != d);  //false
document.write(c !== d);  //true