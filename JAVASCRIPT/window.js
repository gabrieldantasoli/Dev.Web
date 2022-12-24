//var win = window.open() //pode receber um link,padrao de link (_blank,_self) ou um frame

var y = window;

var l, a, px, py;

function scroll() {
    window.scrollBy(1000,1000);
}

function inicia() {
    l = window.innerWidth;
    a = window.innerHeight;
    px = window.screenX;
    py = window.screenY;
    alert(window.length)
    //length é a qtd de frames

    div.innerHTML = "Largura: " + l
    div.innerHTML += "<br>Altura: " + a
}

document.addEventListener("click",scroll)
window.addEventListener("load",inicia)