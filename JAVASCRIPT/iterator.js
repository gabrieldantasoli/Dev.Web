let num = [1,2,3,4,5,6,7,8,9,10,11,12,12,14,15];

for (n of num) {
    //console.log(n)
}

let it = num[Symbol.iterator]()

for (let i = 0; i < num.length; i++) {
    console.log(it.next().value)
}