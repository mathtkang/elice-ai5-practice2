const fruits = ['apple', 'banana', 'orange', 'blueberry', 'strawberry']
var sum = 0; // b로 시작하는 과일의 개수를 저장하는 변수

/*지시사항을 따라 작성해주세요*/


// 3번(점심 메뉴 찾기)에서 사용한 function
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
    // 1. indexOf 사용하기
    // if (fruits[i].indexOf("b") == 0) {
    //     sum += 1;
    // }

    // // 2. indexing 사용하기
    // if (fruits[i][0] == 'b') {
    //     sum += 1;
    // }

    // 2-번외 이중 for 문
    // for (let j=0; j<fruits[i].length; j++) {
    //     document.write(fruits[i][j]);
    // }
    // document.write("<br>");
    
    // 3. 내가 직접 indexOf function 만들기
    if (findTargetText(fruits[i], "b") == 0) {
        sum += 1;
    }
}
document.write(`b로 시작하는 과일은 ${sum}개`);