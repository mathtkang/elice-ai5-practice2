/*지시사항에 따라 작성해주세요.*/

/* 1. add 함수 생성 */
function add (x, y) {
    return x + y
}
// 함수는 변하지 않음

/* 2. 함수 호출한 결과 웹 화면에 출력 */
document.write(add(1,3));
document.write(add(2,2));
document.write(add(3,1));

document.write(add("Hello ","Elice"));
document.write(add("Hello"," Elice"));


// 우리는 위의 함수에서 더해질 값들이 반드시 숫자여야한다고 type을 정해주지 않았다.
// 그래서 문자열일 때도, 둘을 더할 수 있다.
// 'hello'+'world' (아까 1+1+귀요미 했던 것 처럼)





// 1. 웹 화면에 띄우는 방법
// document.write();
// 2. 개발자 도구의 console 창에 띄우는 방법
// console.log();
// 3. 알림창으로 띄우는 방법
// alert();