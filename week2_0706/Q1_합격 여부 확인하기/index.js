var scores = {
    "kor": 55,
    "mat": 75,
    "eng": 50
}

if(scores["kor"] < 40 || scores["mat"] < 40 || scores["eng"] < 40)
    document.write("fail")
else if(scores["kor"] + scores["mat"] + scores["eng"] < 180)
    document.write("fail")
else
    document.write("pass")