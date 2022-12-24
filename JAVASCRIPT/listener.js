//document.addEventListener("mousemove",msg);

function msg() {
    alert("Message");
}

var px = 0;
var py = 0;

document.addEventListener("keydown",function(event) {
    let div = document.getElementById("div");
    let tecla = event.keyCode;
    if (tecla == 38) {
        py -= 30;
        div.style.top = py + "px";
    }
    if (tecla == 40) {
        py += 30;
        div.style.top = py + "px";
    }
    if (tecla == 37) {
        px -= 30;
        div.style.left = px + "px";
    }
    if (tecla == 39) {
        px += 30;
        div.style.left = px + "px";
    }
    if (tecla == 13) {
        document.removeEventListener("keydown");
    }
});