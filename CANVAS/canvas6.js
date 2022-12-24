var canvas = document.getElementById("cnv1");
var ctx = canvas.getContext("2d");

ctx.shadowColor = "rgba(0,0,0,0.5)"
ctx.shadowOffsetX = 10
ctx.shadowOffsetY = 10
ctx.shadowBlur = 15

ctx.beginPath()
ctx.fillStyle = "#f00"
ctx.fillRect(100,100,200,200);

ctx.beginPath()
ctx.shadowColor = "rgba(0,0,0,0)"
ctx.fillStyle = "#00f"
ctx.fillRect(350,350,100,100)

ctx.beginPath()
ctx.shadowOffsetX = -10
ctx.shadowOffsetY = -10
ctx.shadowColor = "rgba(0,0,0,0.6)"
ctx.fillStyle = "#0f0"
ctx.fillRect(400,50,50,50)