/*
숫자 변수를 선언하고, 데이터 400을 삽입하세요.
문자열 변수를 선언하고, 데이터 “bus” 를 삽입하세요.
문자열 변수를 선언하고, 데이터 “like” 를 삽입하세요.
세 변수를 웹 화면에 출력하세요.
*/

var number = 400
var string1 = "bus"
var string2 = "like"

document.write(number)
document.write(string1)
document.write(string2)

// dom 객체에 대해 설명 -> document.write : 화면에 보여주겠다!
// js 에서는 ; 표시가 없어도 실행이 된다 but 좋은 코드는 아니다! (세미콜론 잊지말고 붙여주자!)

// 띄어쓰기 없이 출력되는 것을 볼 수 있다.









// var 로 하면 안되는 이유!
// 예제) 
// var num = 1;
// console.log(num);
// var num = 2;
// 선언하는 것과 초기화하는 것은 다르다.
// 변수를 선언하는 것: 이전에 이런 변수명이 없었는데, 이런 변수를 만들어준다! 라는 뜻이고
// 초기화하는 것: 이미 있는 박스에 새로운 값을 넣는 것

// [파이썬 vs 자바스크립트]
// - print = console.log(num)