//var p = document.createElement("p");
//p.textContent = "gabriel é lindo "
//var t = document.createTextNode("gabriel é gato")
//p.appendChild(t)
//document.body.appendChild(p)

var lista = document.getElementById("lista");

function add() {
    var li = document.createElement("li");
    li.textContent = document.getElementById("text").value;

    var attb = document.createAttribute("style");
    if (document.getElementById("text").value < 0) {
        attb.value = "background: red";
    } else if (document.getElementById("text").value > 0) {
        attb.value = "background: green";
    } else {
        attb.value = "background: yellow";
    }

    li.setAttributeNode(attb)
    lista.appendChild(li);

    document.getElementById("text").value = "";
}

function remove() {
    var li = document.querySelectorAll("#lista li");
    text = document.getElementById("text").value;

    for (let i = 0; i < li.length; i++) {
        if (li[i].textContent == text) {
            lista.removeChild(li[i]);
        }
    }

    document.getElementById("text").value = "";
}

function before() {
    var li = document.querySelectorAll("#lista li");
    text = document.getElementById("text").value;

    var newLi = document.createElement("li")
    newLi.textContent = text;

    var attb = document.createAttribute("style");
    if (document.getElementById("text").value < 0) {
        attb.value = "background: red";
    } else if (document.getElementById("text").value > 0) {
        attb.value = "background: green";
    } else {
        attb.value = "background: yellow";
    }

    newLi.setAttributeNode(attb)

    lista.insertBefore(newLi,lista.childNodes[3])
}

function countEl() {
    alert(document.getElementById("lista").childNodes.length)
}

function replace() {
    var res = prompt()

    var li = document.createElement("li");
    var text = document.getElementById("text").value;
    li.textContent = text;

    var attb = document.createAttribute("class");
    if (text < 0) {
        attb.value = "neg"
    } else if (text > 0) {
        attb.value = "pos"
    } else {
        attb.value = "neu"
    }
    li.setAttributeNode(attb);
    
    lista.replaceChild(li,lista.childNodes[res]);
    
}

function foco() {
    var res = document.getElementById("div");
    if (document.hasFocus()){
        res.innerHTML = "yes"
    } else {
        res.innerHTML = "nop"
    }
}

setInterval(foco,500)


//parentNode ==> retorna o pai de um elemento; elemento.parentNode()
//remove ==> remove um elemento; elemento.remove()
//removeChild ==> remove um elemento; pai.removeChild(pai.childNodes[index])