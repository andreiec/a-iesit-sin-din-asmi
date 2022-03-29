let date_now = Date.now();
let date_future = Date.parse("23 Apr 2019 00:00:00 GMT");

let d = Math.abs(date_future - date_now) / 1000;                           // delta
let r = {};                                                                // result
let s = {                                                                  // structure
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
};

Object.keys(s).forEach(function(key){
    r[key] = Math.floor(d / s[key]);
    d -= r[key] * s[key];
});

let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
let text3 = document.getElementById('text3');
let text4 = document.getElementById('text4');

text1.innerText = r['day'] + " zile"; 
text2.innerText = r['hour'] + " ore"; 
text3.innerText = r['minute'] + " minute"; 
text4.innerText = r['second'] + " secunde"; 

function updateText() {
    date_now = Date.now();
    d = Math.abs(date_future - date_now) / 1000;

    Object.keys(s).forEach(function(key){
        r[key] = Math.floor(d / s[key]);
        d -= r[key] * s[key];
    });

    text1.innerText = r['day'] + " zile"; 
    text2.innerText = r['hour'] + " ore"; 
    text3.innerText = r['minute'] + " minute"; 
    text4.innerText = r['second'] + " secunde"; 
}

var t = setInterval(updateText, 1000);