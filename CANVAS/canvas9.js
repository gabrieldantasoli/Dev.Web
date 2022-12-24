var canvas = document.getElementById("cnv1");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#00f"
ctx.fillRect(100,100,100,100)


//ctx.scale(2,2)
ctx.rotate((Math.PI / 180) * 25)
ctx.fillStyle = "#f00"
ctx.fillRect(300,300,100,100)