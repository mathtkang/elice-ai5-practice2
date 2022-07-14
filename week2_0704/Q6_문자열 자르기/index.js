let str = "Good morning! Have a nice day."
let a = str.split(' ')

// document.write(a); // [Good,morning!,Have,a,nice,day]
document.write(typeof(a)+"<br>");
document.write(a[0]);
// 여기까지 정답 코드


let str2 = "#apple #banana #orange";
let a2 = str2.split(' ')
let a3 = str2.split('#')

document.writeln(a2.length); // 3
document.writeln(a3.length); // 4

document.writeln(a2[0]); // #apple
document.writeln(a2[1]); // #banana
document.writeln(a2[2]); // #orange

console.log(a3[0]); // (빈칸)
document.writeln(a3[1]); // apple
document.writeln(a3[2]); // banana
document.writeln(a3[3]); // orange



// 메서드 에 대해 알아보자
// 앞으로 이부분은 python을 배울 때, 자바스크립트를 배울 때 다른 언어들을 배울 때 정말 많이 사용될 것이다.
// 메서드란?

// (우리는 함수와 메서드를 혼용해서 사용하기도 한다?)
// 메서드를 사용하기 위해서는 객체를 먼저 알아야한다.
// 그 객체가 가지고 있는 메서드를 사용하기 때문에!
// str이라는 문자열 객체에는 어떤 메서드 들이 있는지 알아볼까? -> vsc 에서 cmd 클릭해서 들어가면 됨



