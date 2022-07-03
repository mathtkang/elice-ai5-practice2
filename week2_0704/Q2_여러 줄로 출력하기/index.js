var num = 400;
var str1 = "bus";
var str2 = "like";

// 줄바꿈에는 <br> 도 있지만 \n 도 있습니다.

var br = "<br>";
var li = "li";
var ke = "ke";

// step1)
document.write(400)
document.write("<br>")
document.write("bus")
document.write("<br>")
document.write("li")
document.write("<br>")
document.write("ke")

document.write(num)
document.write(br)
document.write(str1)
document.write(br)
document.write(li)
document.write(br)
document.write(ke)

// step2)
document.write(400+"<br>")
document.write("bus")
document.write("<br>")
document.write("li"+"<br>"+"ke")

// step3)
document.write(400+"<br>bus<br>li<br>ke")
document.write(num+br+str1+br+li+br+ke);


// var g = '줄바꿈을\n할 수 있다.';
// document.write(g); //적용 안됨
// alert(g); //적용 됨

// html문서에서 보이는 document.write 에서는 \n 이 적용되지 않지만,
// alert, confirm, textarea의 value에서는 \n을 사용하면 줄바꿈이 이루어진다.


