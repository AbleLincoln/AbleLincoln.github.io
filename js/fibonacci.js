function fibonacci() {
var total = 0;
var last = 1;
var hold;
var i = 2;
var max = document.getElementById("max2").value

do {
    if (i%2===0) {
        total += i;
    };
    hold = i;
    i = i + last;
    last = hold;
} while (i <= max);

document.getElementById("answer2").innerHTML = total;
}