const min = document.getElementById("min");
const max = document.getElementById("max");
const url = document.getElementById("url");
const title = document.getElementById("title");
const psw = 69;



const button = document.querySelector("#btn");
const input = document.querySelector("#input");


let x = 1;
let z = 100;
button.addEventListener("click", function () {




    const y = input.value;

    


    if (y > z | y < x) {
        title.innerText = "你是不是";
        min.innerText =  "";
        max.innerText =  "";
        url.innerText = "欠扁";
        button.innerText = "F5重來";
        input.value =  null;


    }

    if (y < psw && y > x) {
        x = y;
        min.innerText = y;
        input.value = null;

    }
    if (y > psw && y < z) {
        z = y;
        max.innerText = y;
        input.value = null;

    }
    if (y == psw) {
        x=z=y;
        min.innerText = null;
        max.innerText = null;
        url.innerText = psw;
        title.innerText = "なにぃぃぃぃぃ?!?!";
        button.innerText = "F5重來";
    }


});
