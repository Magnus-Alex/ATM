const button0 = document.getElementById("button_0");
button0.addEventListener('click', press0);
const button1 = document.getElementById("button_1");
button1.addEventListener('click', press1);
const button2 = document.getElementById("button_2");
button2.addEventListener('click', press2);
const button3 = document.getElementById("button_3");
button3.addEventListener('click', press3);
const button4 = document.getElementById("button_4");
button4.addEventListener('click', press4);
const button5 = document.getElementById("button_5");
button5.addEventListener('click', press5);
const button6 = document.getElementById("button_6");
button6.addEventListener('click', press6);
const button7 = document.getElementById("button_7");
button7.addEventListener('click', press7);
const button8 = document.getElementById("button_8");
button8.addEventListener('click', press8);
const button9 = document.getElementById("button_9");
button9.addEventListener('click', press9);
const buttonDelete = document.getElementById("button_delete");
buttonDelete.addEventListener('click', pressDelete);

function press0 () {
    input_bar.value += "0";
}
function press1 () {
    input_bar.value += "1";
}
function press2 () {
    input_bar.value += "2";
}
function press3 () {
    input_bar.value += "3";
}
function press4 () {
    input_bar.value += "4";
}
function press5 () {
    input_bar.value += "5";
}
function press6 () {
    input_bar.value += "6";
}
function press7 () {
    input_bar.value += "7";
}
function press8 () {
    input_bar.value += "8";
}
function press9 () {
    input_bar.value += "9";
}
function pressDelete () {
    input_bar.value = input_bar.value.substring(0, input_bar.value.length - 1);
}