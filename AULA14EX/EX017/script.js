function ver() {
   
    
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    
    if(num.value.length == 0){
        alert('[ERRO] Entrada Inválida!!!')
        tab.innerHTML = ''
    }else{
        var n = Number(num.value)
        var c = 1   
        var calc
        tab.innerHTML = ''
        while(c <= 10){
           let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    
}