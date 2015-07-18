function multiples() {
var num1 = document.getElementById("num1").value
var num2 = document.getElementById("num2").value
var max = document.getElementById("max").value

var total=0;
for(var i=0; i<max; i++) {
    if(i%num1===0) {
        total += i;
    }
    else if (i%num2===0) {
        total += i;
    }
};

document.getElementById("answer1").innerHTML = total;
}