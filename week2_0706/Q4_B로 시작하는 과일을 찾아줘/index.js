const fruits = ['apple', 'banana', 'orange', 'blueberry', 'strawberry']
let b_first = 0; // b로 시작하는 과일 개수 저장 변수
let a_contain = 0; // a를 포함하는 과일 개수 저장 변수
/*
자바스크립트에서는 배열 속 원하는 값을 찾고싶을 때: indexOf 와 includes를 이용합니다.
indexOf: 찾은 값의 첫번째 요소의 위치를 반환 (없다면 -1 리턴)
includes: 찾는 값이 있다면 true, 없다면 false를 리턴
*/

// step3) 앞의 문제(점심 메뉴 찾기)에서 사용한 function 활용하기
function findTargetText(text, target_txt) {
    let postion = -1;

    for (let i=0; i<text.length; i++) {
        if (text[i] == target_txt) {
            postion = i;
            break;
        }
    }
    return postion;
}

for (let i=0; i<fruits.length; i++) {
    // step1) indexOf 사용
    if (fruits[i].indexOf("b") == 0) {
        b_first += 1;
    }

    // step2) indexing 사용
    if (fruits[i][0] == 'b') {
        b_first += 1;
    }
    
    // step3) 내가 직접 indexOf function 만들기
    if (findTargetText(fruits[i], "b") == 0) {
        b_first += 1;
    }
}

document.write(`b로 시작하는 과일은 ${b_first}개`); //2
// 여기까지 문제 풀이


// [문제 확장] a를 포함하는 과일 갯수는? (includes를 사용합시다.)

for (let i=0; i<fruits.length; i++) {
    // step1) includes 사용
    if (fruits[i].includes("a") == true) {
        a_contain += 1;
    }

    // step2) indexing 사용
    for (let j=0; j<fruits[i].length; j++){
        if (fruits[i][j] == "a") {
            a_contain += 1;
            break;
        }
    }
}
document.write(`a를 포함하는 과일은 ${a_contain}개`); //4