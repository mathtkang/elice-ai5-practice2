//https://velog.io/@filoscoder/-%EC%99%80-%EC%9D%98-%EC%B0%A8%EC%9D%B4-oak1091tes

// 흔히 컴퓨터는 0과 1로 이루어져있다 라고 한다.
// 이 말은 컴퓨터는 2진법 이다. 라는 뜻이고
// 두개의 흑백으로 모든 것을 판단 및 구분한다는 듯이다
// 그렇다면 0과 1 말고 true, false로도 구분할 수 있는거고, 이것도 이진법이 되는 것이다.a
// 결국 이진법 아래에
// 0,1
// 흑,백
// 텅 빈, 다 채워진
// pass, fail
// t,f 가 다 속하기 때문에, 컴퓨터를 위와 같은 이진법으로 나타낼 수 있는 것!

// 우리는 앞으로 0을 false라고 하고 1을 true 라고 할 것이다.



var a = 10;
var b = 10;

document.write(a == b);
document.write(a === b);

b = '10';

document.write(a == b);
document.write(a === b);