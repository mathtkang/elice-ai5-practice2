// 아래의 students 객체는 엄밀히 말하면, 객체들의 배열입니다! 배열 안의 값이 객체인 셈이죠!
const students = [
    {
        name: 'john',
        studentId: 2020123456,
        major: 'business'
    },
    {
        name: 'elice',
        studentId: 2015111111,
        major: 'statistics'
    },
    {
        name: 'jennifer',
        studentId: 2017000000,
        major: 'visual design'
    }
]

// /*1. elice를 찾아 전공을 'computer science'로 바꿔주세요.*/
for(let i = 0; i < students.length; i++) {
    if(students[i].name == 'elice') {
        // document.write("이전 major 확인해보기:" + students[i].major + "<br>");
        students[i].major = 'computer science';
        // document.write(`바뀐 major 확인해보기:${students[i].major} <br>`);
    }
}

// /*2. 웹 화면에 students 정보를 출력해 제대로 수정되었는지 확인해보세요.*/
for(let i = 0; i < students.length; i++) {
    // document.write(students[i].name + "'s major: " + students[i].major + "<br>")
    document.write(`${students[i].name}'s major: ${students[i].major} <br>`)
}

// 여기까지 문제 정답



// [확장]
// 2-1. 옛날에 사용하던 방식
for(let i = 0; i < students.length; i++) {
    for (let j = 0; j < Object.keys(students[i]).length; j++){
        document.write(`${Object.keys(students[i])[j]}: ${students[i][Object.keys(students[i])[j]]}`);
        document.write("<br>");
    }
}
// 2-2. 최신 문법으로 풀기 (for-in문 활용)
for(let i = 0; i < students.length; i++) {
    for (const property in students[i]) {
        document.write(`${property}: ${students[i][property]}`);
        document.write("<br>");
    }
}

// 1,2번 한번에 풀기: indexing으로 풀기
for (let i = 0; i < students.length; i++) {
    if (students[i]["name"] == "elice") {
        students[i]["major"] == "computer science";
    }
    document.write(`${students[i]["name"]}'s major: ${students[i]["major"]} <br>`);
}