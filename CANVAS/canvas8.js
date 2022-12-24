var canvas = document.getElementById("cnv1");
var ctx = canvas.getContext("2d");

var gradient = ctx.createLinearGradient(0,100,0,300);
gradient.addColorStop(0,"#f00")
gradient.addColorStop(0.5,"#0f0")
gradient.addColorStop(0.75,"yellow")
gradient.addColorStop(1,"#00f")

ctx.fillStyle = gradient
ctx.fillRect(100,100,300,300)