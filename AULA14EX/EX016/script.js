function contar() {
    
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var int = document.getElementById('txtint')
    
    if (ini.value.length == 0 || fim.value.length == 0 || int.value.length == 0) {
        res.innerHTML = '[ERRO] Entreda Inválida!!!'
    } else {
        res.innerHTML = 'Contando...<br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(int.value)

        if(p <= 0){
            alert('Intervalo Inválido. Considerando INTERVALO 1')
            p = 1
        }

        if(i < f){
            //Contagem Progressiva
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }else{
            //Contagem Regressiva
            for(c = i; c >= f; c -= p ){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}