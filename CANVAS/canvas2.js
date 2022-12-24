var canvas = document.getElementById("cnv1");
var ctx = canvas.getContext("2d");

ctx.lineWidth = 30
ctx.strokeStyle = "red"
ctx.moveTo(0,0);
ctx.lineTo(250,250);
ctx.stroke();
ctx.lineTo(500,0)
ctx.moveTo(250,250);
ctx.lineTo(0,500);
ctx.moveTo(250,250);
ctx.lineTo(500,500);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle = "blue";
ctx.moveTo(0,0);
ctx.lineTo(100,100)
ctx.arcTo(250,250,500,0,200);
ctx.lineTo(500,0)
ctx.moveTo(0,500);
ctx.lineTo(100,400);
ctx.arcTo(250,250,500,500,200)
ctx.lineTo(500,500);

ctx.stroke()