const min = document.getElementById("min");
const max = document.getElementById("max");
const url = document.getElementById("url");
const title = document.getElementById("title");
const psw = Math.floor(Math.random()*100+1);
const button = document.querySelector("#btn");
const input = document.querySelector("#input");


let minl = 1;
let maxl = 100;
button.addEventListener("click", function () {

    const num = input.value;

    //防呆
    if (num > maxl | num < minl) {
        title.innerText = "你是不是";
        min.innerText = "";
        max.innerText = "";
        url.innerText = "欠扁";
        button.innerText = minl.toString() + "  -  " + maxl.toString();
        input.value = null;


    }
    //設定範圍
    if (num < psw && num > minl) {
        title.innerText = "拆炸彈";
        max.innerText = maxl;
        url.innerText = "-";
        minl = num;
        min.innerText = num;
        input.value = null;

    }
    if (num > psw && num < maxl) {
        title.innerText = "拆炸彈";
        min.innerText = minl;
        url.innerText = "-";
        maxl = num;
        max.innerText = num;
        input.value = null;

    }
    //猜到
    if (num == psw) {
        minl = maxl = num;
        min.innerText = null;
        max.innerText = null;
        url.innerText = psw;
        title.innerText = "なにぃぃぃぃぃ?!?!";
        button.innerText = "F5重來";
    }


});
