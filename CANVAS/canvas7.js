var canvas = document.getElementById("cnv1")
var ctx = canvas.getContext("2d")


// QUADRATIC CURVE
/*ctx.beginPath()
ctx.lineTo(100,100)
ctx.quadraticCurveTo(200,0,300,100)
ctx.quadraticCurveTo(400,200,500,100)
ctx.moveTo(0,400)
ctx.quadraticCurveTo(150,200,300,400)
ctx.quadraticCurveTo(400,540,500,400)
ctx.moveTo(0,250)
ctx.quadraticCurveTo(250,170,500,250)
ctx.moveTo(250,100)
ctx.quadraticCurveTo(500,50,250,400)
ctx.stroke()
ctx.closePath()*/

// BEZIER CURVE
ctx.beginPath()
ctx.moveTo(250,100)
ctx.bezierCurveTo(-50,175,700,325,250,400)
ctx.stroke()
ctx.closePath()
