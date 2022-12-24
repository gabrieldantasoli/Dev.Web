var canvas = document.getElementById("cnv3");
var ctx = canvas.getContext("2d");

// posx , posy , raio , ang. inicial , ang final, sentido(true = horario , false = anti-horario)
//radianos = (PI / 180) * angulo
ctx.fillStyle= "red";
ctx.beginPath()
ctx.arc(250,250,200,0,(Math.PI / 180) * 360,false)
ctx.fill()
ctx.closePath()
ctx.beginPath()
ctx.fillStyle = "black";
ctx.arc(250,250,150,0,(Math.PI / 180) * 360, false);
ctx.fill()
ctx.closePath()