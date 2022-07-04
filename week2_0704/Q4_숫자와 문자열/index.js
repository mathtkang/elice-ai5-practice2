var num1 = 1;
var num2 = 2;

var str1 = "1";
var str2 = "2";

document.write(num1+num2)
document.write(str1+str2 +"<br>")


// 자바스크립트는 특이하게 문자열 숫자를 더할 수 있다.

let one = 1; //num
let cute = "귀요미"; //string



// one + one + cute =>
// cute + one + one =>
document.write(one + one + cute + "<br>") // 2귀요미
document.write(cute + one + one + "<br>") // 귀요미11


// ------------

document.write(cute + Number(one) + Number(one) + "<br>")
document.write(cute + +one + +one + "<br>")



// 그럼 이 상황에서 덧셈 연산자가 적용되기 전에, 둘을 무조건 숫자로 바꿔주는 방법? (2가지)
// 1. alert(Number(one) + Number(two));
// 2. alert(+one + +two); // 3 = 1 + 2


// `Number(...)`를 사용해서 같은 동작을 하는 코드를 작성할 수 있지만, 더 기네요.
// alert( Number(apples) + Number(oranges) ); // 5
