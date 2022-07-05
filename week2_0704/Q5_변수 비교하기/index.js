//https://velog.io/@filoscoder/-%EC%99%80-%EC%9D%98-%EC%B0%A8%EC%9D%B4-oak1091tes


// 값과 타입

var a = 10;
var b = 10;

document.write(a == b);
document.write(a === b);

b = '10';

document.write(a == b);
document.write(a === b);


// step1): ==, === ----------------------------------------
// 
let a = 0;
let b = false;

document.write(a == b) // [0값은 false와 동일하므로 -> true 출력]
document.write(a === b) // [두 피연산자의 유형이 다르기 때문에 ->false]

document.write(typeof 0); 	// expected output: "number"
document.write(typeof false); // expected output: "boolean"

// [🔍 숫자와 문자열 비교]

let c = 2;
let d = "2";
document.write(c == d) // [두 피연산자의 값이 동일하기 때문에 -> true]
document.write(c === d) // [두 피연산자의 유형이 다르기 때문에 ->false]

document.write(typeof 2);	// expected output: "number"
document.write(typeof "2");  // expected output: "string"


// step2): !==, !=== ---------------------------------------

// [값이 다르지 않음으로 (자료형 비교 안함)]

document.write(2 != "2") // expected output: false

// [두 피연산자의 유형이 다른 것이 맞기 때문에 -> true]

document.write(2 !== "2") // expected output: true 




console.log(typeof 2);	// expected output: "number"
console.log(typeof "2");  // expected output: "string"

