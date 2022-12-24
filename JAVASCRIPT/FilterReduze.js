let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

let odd = nums.filter((r) => {return r % 2 == 0})

let even = nums.filter((r) => {return r % 2 != 0})

console.log(odd)
console.log(even)



let soma = nums.reduce((n1,n2) => {
    return n1 + n2
})

console.log(soma)