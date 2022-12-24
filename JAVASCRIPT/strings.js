var frase = "gabriel esteve aqui. Esteve ele aqui."

/*
match
search
replace
charAt
charCodeAt
concat
indexOf
lasIndexOf
slice
split
substring
tolowercase
touppercase
toString
trim
startsWith
endsWith
includes
repeat
*/

/*
uso do match()
MODIFICADORES: usar / / ao inves de aspas
g - todas as opcoes
i - case sem sitive

BUSCADORES:
[xyz] - todos os x , y , z
[^xyz] - todos menos x , y, z
[a-p] - todos entre A e P
[x|y|Z] - todos os x , y , z
*/
var res = frase.match(/[^a-e]/ig)

var sc = frase.search("gabriel")

var x = frase.replace(/esteve/ig,"samuel")

var y = frase.charAt(3)

var z = frase.charCodeAt(6)

var txt1 = "gabriel "
var txt2 = "é lindo"

var v = txt1.concat(txt2)

//console.log(frase.indexOf("Esteve"))
//console.log(frase.lastIndexOf("Esteve"))
//console.log(frase.slice(0,8))
//console.log(frase.split(" "))
//console.log(frase.substring(8,14))
//console.log(frase.toLocaleLowerCase())
//console.log(frase.toUpperCase())
//console.log(frase.startsWith("g"))
//console.log(frase.includes("Esteve"))
var x = 200
//toString converte bases decimais
//console.log(x.toString());
//console.log(x.toString(2))
//console.log(x.toString(8))
//console.log(x.toString(16))
var x = "     d   d dddd  s  a"
console.log(x.trim())