// Node.js 라는 런타임이 있습니다. 이 친구는 브라우저에서만 실행 가능했던 javascript를 브라우저 밖에서도 실행될 수 있도록 해줍니다.

let i; //전역변수

// step1) 정답 코드
for (i = 1; i <= 100; i++) {
    if(i % 2 == 0) {
        document.write(i);
    }
}

document.write("<br>");

// step2) 홀수 (1이상 100이하 정수 중 홀수만)
for (i = 1; i <= 100; i++) {
    if(i % 2 == 1) {
        document.write(i);
    }
}