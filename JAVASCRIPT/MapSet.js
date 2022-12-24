let produtos = new Map();

produtos.set("1","dog");
produtos.set("2","tela");
produtos.set("3","teclado");
produtos.set("4","fone");
produtos.set("5","mouse");

//produtos.clear()
//produtos.delete("1")
//produtos.has("1")
//console.log(produtos.size)

//console.log(produtos.get("1"))

//for (p of produtos){
//    console.log(p)
//}

//function info(chave,valor) {
//    console.log(chave + "   " + valor);
//}

//produtos.forEach(info)

//SET

/*let set = new Set([1,2,3,3,3,2,1]);
set.add(4)
set.add(5)
set.add(2)

set.delete(1)
set.clear()

console.log("size : " + set.size)

for (n of set) {
    console.log(n)
}*/

// MAP

let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

let raiz = nums.map(Math.sqrt)

let dobros = nums.map((r) => {
    return r * 2;
})

let isOdd = nums.map((r) => {
    if (r % 2 == 0) return r
    else return "even"
})



console.log(isOdd)