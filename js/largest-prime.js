function prime() {
  var num = document.getElementById("num3").value;

  for (i = num; i > 1; i--) {
    var count = 0;
    if (num % i === 0) {
      var j = i - 1;
      while (count === 0 && j > 1) {
        if (i % j === 0) {
          count = 1;
        }
        j--;
      }
      if (count === 0) {
        document.getElementById("answer3").innerHTML = i;
        return true;
      }
    };
  }
}