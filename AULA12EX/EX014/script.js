function carregar(s) {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min} hrs.`

    if (hora >= 6 && hora < 12) {
        //bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if(hora >=12 && hora < 18){
        //boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    }else{
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#15294a'
    }
}


