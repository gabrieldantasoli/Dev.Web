var canvas = document.getElementById("cnv1");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0,0,255)";
ctx.fillRect(10,10,90,90)

ctx.fillStyle = "rgb(0,255,0)"
ctx.fillRect(400,400,90,90)

ctx.fillStyle = "rgb(255,0,0)"
ctx.rect(100,100,300,300)
ctx.fill()

ctx.clearRect(150,150,200,200)