/* 
잡학사전 
script 언어란? 특정 프로그램에서 실행되는 언어
ex) java"script" 라는 언어는 브라우저(크롬,파이어폭스,사망한 IE에 내장된 javascript 엔진을 통해서 실행이 됩니다. 즉 브라우저가 없으면 동작하지 않습니다. 반대로, 브라우저만 설치되어 있다면 언제든지 코딩을 할 수가 있습니다.)
script 언어는 설계자체가 5~6줄만 작성하는걸 생각하고 만든 언어 (7일만에 만들어진 언어)

object type
json: javascript object notation -> python dict 
*/

var scores = {
    "kor": 55,
    "mat": 75,
    "eng": 50
}

/* 
[문제 조건]
"kor", "mat", "eng" 이 점수들중 하나라도 40점보다 낮다면 F
3 과목의 점수의 평균이 60점보다 낮다면 F
이 조건이 아니면 pass
*/ 

// 범위로 생각하기
// || : or(이거나) : 합집합
// && : and(이면서) : 교집합

if (scores["kor"] < 40 || scores["mat"] < 40 || scores["eng"] < 40) {
    document.write("fail");
}
else if ((scores["kor"] + scores["mat"] + scores["eng"]) / 3 < 60) {
    document.write("fail");
}
else {
    document.write("pass");
}