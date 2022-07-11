var foods = ["hamburger", "pasta", "curry", "chicken", "salad", "tteokbokki", "ramen", "pizza", "gimbap", "sushi"];

// step1) 정답 코드
var len = foods.length;
document.write(len);

for(var i=0; i < len; i++){
    if(i%2 == 0) {
        // foods의 index가 0,2,4,6... 으로 짝수만 나타내고 싶다!
        document.write("<br>"+foods[i]);
    }
}

// step2) 함수 이용 (use list)
function findLunch(foods) {
    let foodList = "";
    
    for (let i=0; i<foods.length; i++) {
        if (i%2 === 0) {
            foodList += foods[i];
            foodList += "<br>";
        }
    }
    return foodList;
}

document.write("<h3>1. 함수 이용</h3>"+findLunch(foods));

// step3) 배열의 값이 달라져도 함수의 return은 동일
var foods2 = ["tteokbokki", "ramen", "curry", "chicken", "gimbap", "kimchi", "mandu", "banana", "pasta"]

document.write("<h3>2. 배열 다르게 함수 이용</h3>"+findLunch(foods2));




// ++반대로) "" 가 있을 때, 각각을 띄어쓰기를 줄바꿈으로 바꿔서 표현하고 싶다
let foodArr = [];
// for (let i=0; i<foods.length; i++) {
//     if (i%2 === 0) {
//         foodArr.push(foods[])
//     }
// }



// foods 에 상관 없이 오름차순으로 출력하는 경우?


// 배열 선언
test = []

// 추가
test.push({"name":1, "id":2});
test.push({"name":2, "id":3});

Object