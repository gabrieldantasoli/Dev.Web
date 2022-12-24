//setTimeout(bk,10000)
//var tmp = setInterval(msg,500);

function msg() {
    alert('okk')
}

function bk() {
    clearInterval(tmp)
}

var anima; 

function write() {
    document.getElementById("div").innerHTML += "a";
    anima = requestAnimationFrame(write)
}

write()

document.addEventListener("click",cancel)

function cancel() {
    cancelAnimationFrame(anima)
}
