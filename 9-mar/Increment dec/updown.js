var value = 0;
function myFunction1() {
        value = value + 1;
        document.getElementById("computerScore").innerHTML = value;

}
function myFunction2() {
        value = value - 1;
        document.getElementById("computerScore").innerHTML = value;
        if (value < 0) {
            value = 0;
            document.getElementById("computerScore").innerHTML = value;
        }

}
function myFunction3() {
        value = 0;
        document.getElementById("computerScore").innerHTML = value;

}
