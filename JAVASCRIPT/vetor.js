//var slot = [] ou new Array();

//push    --> add no final
//pop     --> remove no final
//unshift --> add no inicio
//shift   --> remove do inicio
//splice  --> remove uma quantidade a partir de uma posicao
//indexOf --> elemento esta em qual posicao do array
//sort
//reverse
//concat
//length


var slot = new Array();
var slot2 = [-2, -3, -4, -5];

slot.push(2);
slot.push(3);
slot.push(4);
slot.push(1);
slot.unshift(0);
slot.unshift(-1);
slot.push(5);
slot.push(6);

//slot.pop();
//slot.shift();
//slot.splice(1,3);

slot.sort();
slot.reverse();
slot = slot.concat(slot2);

/*for (num of slot) {
    //console.log(slot[num])
    console.log(num)
}

console.log("----------");
console.log("-5" , slot.indexOf(-5) != -1 ? "Is in..." : "Not in...")
console.log("7" , slot.indexOf(7) != -1 ? "Is in..." : "Not in...")
console.log("----------");

console.log("Slot tem tamanho : " , slot.length)*/


// MATRIZES
var matriz = new Array();

var item1 = new Array() , item2 = new Array() , item3 = new Array() , item4 = new Array();

matriz.push(item1);
matriz.push(item2);
matriz.push(item3);
matriz.push(item4);

item1.push(1,2,3);
item2.push(11,12,13,14);
item3.push(22,23);
item4.push(30,36,39);

var max = Math.max(item1.length,item2.length,item3.length,item4.length);

for (var i = 0; i < max; i++) {
    for (num of matriz[i]) {
        console.log(num);
    }
    console.log("----------");
}