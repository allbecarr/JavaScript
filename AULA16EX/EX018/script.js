let num = document.querySelector('input#txtn')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) { // Função verifica se o número está entre 0 e 100
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l) { // Função cerifica se o número está ou não na lista
    if(l.indexOf(Number(n)) != -1){ // indexOf verifica se o número digitado ocupa alguma posição do índice
        return true // '-1' representa que o número informado não foi encontrado na lista
    }else{
        return false
    }
}

function adicionar() {
if(isNumero(num.value) && !inLista(num.value, valores)){ //Analisa se É UM NÚMERO VÁLIDO e se NÃO está na lista
    valores.push(Number(num.value)) // Adicionando o número ao vetor 'valores'
    let item = document.createElement('option') // Criando um elemento 'option' dinâmicamente dentro da select.
    item.text = `Valor ${num.value} adicionado.` // Escrevendo dentro de 'option'
    lista.appendChild(item) // Adicionando à 'lista'
    res.innerHTML = '' // Limpando a finalização
}else{
    alert('Valor inválido ou já encontrado na lista.')
}
num.value = '' // Apaga o conteudo no campo 'num'
num.focus() // Coloca o foco ou o cursor devolta no campo de inicio da digitação


}

function finalizar() {
    if(valores.length == 0){
        alert('Por favor, insira algum valor antes de finalizar.')
    }else{
        let tot = valores.length
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        //let media = 0

        for(let pos in valores){
            soma += valores[pos]
            //media = soma / tot
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor)
                menor = valores[pos]

        }
        
        res.innerHTML = '' // Limpando a finalização
        res.innerHTML += `<p>A lista possui <strong>${tot}</strong> itens cadastrados.</p>`
        res.innerHTML += `<p>O maior valor inserido foi: <strong>${maior}</strong>.</p>`
        res.innerHTML += `<p>O menor valor inserido foi: <strong>${menor}</strong>.</p>`
        res.innerHTML += `<p>A soma total dos valores inseridos é igual a <strong>${soma}</strong>.</p>`
        //res.innerHTML += `<p>A média dos valores inseridos é <strong>${media}</strong>.</p>`
        res.innerHTML += `<p>A média dos valores inseridos é <strong>${soma/tot}</strong>.</p>`
    }
} 