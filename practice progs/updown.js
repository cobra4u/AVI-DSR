var count = 0;
function inc() {
        count = count + 1;
        document.getElementById("Score").innerHTML = count;
}

function dec() {
        count = count - 1;
        if (count > 0) {
            document.getElementById("Score").innerHTML = count;
        }

}
function rst() {
        count = 0;
        document.getElementById("Score").innerHTML = count;

}

