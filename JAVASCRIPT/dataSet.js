function changeColor() {
    var divs = document.getElementsByTagName("div");
    for (let i in divs) {
        console.log(i)
    }
    for (let i = 0; i < divs.length; i++) {
        var attb = document.createAttribute("style");
        attb.value = "background: " + divs[i].dataset.color + ";";

        divs[i].setAttributeNode(attb)
    }
}

changeColor()