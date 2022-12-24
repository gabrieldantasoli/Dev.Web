function hr() {
    console.log("-------------------")
}

function write(s1,s2 = "null") {
    console.log(s1 + " <==> " + s2)
}

function write2(...s1) {
    let res = "";
    for (let i = 0; i < s1.length; i++) {
        res += s1[i] + "   ";
    }
    console.log(res)
}

function sum(n1,n2,n3) {
    return n1 + n2 + n3;
}

//anonima --> nao tem identificador
let pi = function() {
    return Math.PI;
}

//construtoras 
let soma = new Function("n1,n2","return n1+n2");

//console.log(soma(1,2))
//console.log(soma(3,4))

//Arrow
let sum1 = (...num) => {
    let res = 0;
    for (let n of num) {
        res += n;
    }
    return res;
};

console.log(sum1(1,2,4,5,3,8.9))


hr();
write("gabriel","lindo");
write("is")
write2(10,20,30,40);
hr();