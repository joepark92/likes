var x = [9, 12, 9]
var totalLikes = [document.querySelector("#like1"), document.querySelector("#like2"), document.querySelector("#like3")]

function addLikes1() {
    x[0]++;
    totalLikes[0].innerText = x[0] + " like(s)";
}

function addLikes2() {
    x[1]++;
    totalLikes[1].innerText = x[1] + " like(s)";
}

function addLikes3() {
    x[2]++;
    totalLikes[2].innerText = x[2] + " like(s)";
}
