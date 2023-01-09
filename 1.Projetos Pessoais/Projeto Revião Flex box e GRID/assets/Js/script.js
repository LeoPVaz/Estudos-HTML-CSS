let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    proximaImg()
}, 2000);

function proximaImg() {
    count++;
    if (count > 5) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}
