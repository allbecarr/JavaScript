let v = 13

let num = []
//num = [v]
num[0] = 7
num.push(v)
num.push(22)

console.log(num)
console.log(num.length)
console.log(num.sort())
/*
for(let pos=0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/
/*
for (let pos in num) {
    console.log(`Na posição ${pos} tem o valor ${num[pos]}`)
}
*/
/*
let elem = 9
let pos = num.indexOf(elem)
if (pos == -1){
    console.log(`O valor não foi encontrado.`)
}else{
    console.log(`O valor ${elem} está na posição ${pos}.`)
}
*/