var canvas = document.getElementById("cnv4");
var ctx = canvas.getContext("2d");

var canvas = document.getElementById("cnv4");
var ctx = canvas.getContext("2d");

let shrek = new Image();
shrek.src = "open.jpg";
shrek.onload = () => {
    // imagem , x , y , width , height
    ctx.drawImage(shrek,0,0,500,250);
}
let shrek2 = new Image();
shrek2.src = "R.jpg";
shrek2.onload = () => {
    ctx.drawImage(shrek2,0,250,500,250)
}