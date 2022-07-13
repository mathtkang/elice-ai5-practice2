var foods = ["hamburger", "pasta", "curry", "chicken", "salad", "tteokbokki", "ramen", "pizza", "gimbap", "sushi"];

document.write("<h3>step1. 정답 코드</h3>");
// step1) 정답 코드
var len = foods.length;
document.write(len);

for(var i = 0; i < len; i++){
    if(i%2 == 0) {
        // 나머지가 0 <= foods의 index가 0,2,4,6... 으로 짝수만 나타내고 싶다!
        document.write("<br>"+foods[i]);
    }
}


// step2) 함수 이용 (use list)
function findLunch(foods) {
    let foodList = "";
    
    for (let i = 0; i < foods.length; i++) {
        if (i%2 === 0) {
            foodList += foods[i];
            foodList += "<br>";
        }
    }
    return foodList;
}
document.write("<h3>step2. 함수 이용</h3>"+findLunch(foods));


// step3) 배열(함수의 파라미터=input)의 값이 달라져도 함수의 return(=output)은 동일
var foods2 = ["tteokbokki", "ramen", "curry", "chicken", "gimbap", "kimchi", "mandu", "banana", "pasta"]
document.write("<h3>step3. 다른 배열 동일한 함수 이용</h3>"+findLunch(foods2));


// step4) foods 배열을 오름차순/내림차순으로 모두 출력하는 경우
foods.sort(); // 오름차순 정렬(문자 오름차순이기 때문에 sort만 사용해도 된다. 숫자 오름차순을 위해선 다음을 참고하자: https://hianna.tistory.com/409)

document.write("<h3>step4. 오름차순 정렬 후 출력</h3>");
for (let i = 0; i < foods.length; i++){
    document.write(foods[i]+"<br>");
}