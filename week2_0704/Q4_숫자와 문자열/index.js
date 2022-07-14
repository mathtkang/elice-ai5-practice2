let num1 = 1;
let num2 = 2;

let str1 = "1";
let str2 = "2";

let br = "<br>"

document.write(num1+num2); //3
document.write(br);
document.write(1+2); //3
document.write(br);
document.write(str1+str2); //12
document.write(br);
document.write("1"+"2"); //12
// 여기까지 정답 코드



// [1 + 1 = 귀요미 song ^^*]
let one = 1; //num
let cute = "귀요미"; //string

// 1. one + one + cute => ?
document.write(one+one+cute); //2귀요미
document.write(br);

// 2. cute + one + one => ?
document.write(cute+one+one); //귀요미11
document.write(br);

// 3. 귀요미2 를 출력하고 싶다면?
document.write(cute+(one+one));
document.write(br);

// 4.
one = "1"; //string으로 재선언
document.write(one+one+cute); //11귀요미
document.write(br);

// 5. 형변환
document.write(cute + (Number(one)+ Number(one))); //귀요미2


// 자바스크립트는 문자열과 숫자를 더할 수 있습니다!