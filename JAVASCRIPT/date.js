var date = new Date();
var ndate = new Date();
var sdate = new Date(1978,2,12,18,23,12,122); //ano,mes,dia,hora,min,seg,mil

ndate.setDate(date.getDate()+2)
ndate.setFullYear(date.getFullYear() - 2)

/*
getDay()
getDate()
getMonth()
getFullYear()
getHours()
getMinutes()
getSeconds()

*/

console.log(sdate)
console.log(sdate.getDay())