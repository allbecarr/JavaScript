function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id','foto')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Dados inválidos, favor verificar.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Masculino'
            if(idade >= 0 && idade < 5){
                //bebe
                img.setAttribute('src','bebe.png')
            }else if(idade < 10){
                //criança
                img.setAttribute('src','criancahomem.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','jovemhomem.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','adultohomem.png')
            }else{
                //idoso
                img.setAttribute('src','idosohomem.png')
            }
        } else if(fsex[1].checked){
            genero = 'Feminino'
            if(idade >= 0 && idade < 5){
                //bebe
                img.setAttribute('src','bebe.png')
            }else if(idade < 10){
                //criança
                img.setAttribute('src','criancamulher.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','jovemmulher.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','adultomulher.png')
            }else{
                //idoso
                img.setAttribute('src','idosomulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos o gênero <strong>${genero}</strong> com <strong>${idade}
         anos</strong> de idade.`
        res.appendChild(img)
    }
}