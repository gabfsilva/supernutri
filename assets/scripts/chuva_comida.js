let comidasEscolhidas = []

function gerarComidas(element) {
    let speed = 1000
    const comidasBoas = ['brocolis.png', 'cenoura.png', 'arroz.png', 'feijao.png', 'alface.png', 'ceolinha.png', 'tomate.png', 'alho.png', 'onion.png', 'pimentao.png', 'maca.png', 'abacate.png']
    const comidasRuins = ['sorvete.png', 'batatinha.png', 'pizza.png', 'salgadinho.png', 'hamburger.png', 'coxinha.png', 'chocolate.png', 'bombom.png', 'cupcake.png', 'biscoito.png', 'rosquinha.png', 'brigadeiro.png']
    
    const ingredientes = document.getElementById('ingredientes')
    
    setInterval(() => {
      const imgBoa = document.createElement('div')
      imgBoa.className = 'ingrediente-chuva'
      comidaBoaImg = comidasBoas[Math.floor(Math.random() * comidasBoas.length)];
      imgBoa.style.backgroundImage = `url('../assets/images/${comidaBoaImg}')`
      imgBoa.style.left = `${Math.random() * ingredientes.clientWidth}px`
      imgBoa.angle = Math.random() * 360
      imgBoa.alt = comidaBoaImg 
      imgBoa.addEventListener('click', (comidaBoaImg) => escolherComida(comidaBoaImg))
      ingredientes.appendChild(imgBoa)
    
      const imgRuim = document.createElement('div')
      imgRuim.className = 'ingrediente-chuva'
      comidaRuimImg = comidasRuins[Math.floor(Math.random() * comidasRuins.length)];
      imgRuim.style.backgroundImage = `url('../assets/images/${comidaRuimImg}')`
      imgRuim.style.left = `${Math.random() * (ingredientes.clientWidth - 75)}px`
      imgRuim.angle = Math.random() * 360
      imgRuim.alt = comidaRuimImg
      imgRuim.addEventListener('click', (comidaRuimImg) =>  escolherComida(comidaRuimImg))
      ingredientes.appendChild(imgRuim)
    
      let positionBoa = 0
      let positionRuim = 0
      const intervalId = setInterval(() => {
        positionBoa += 10
        positionRuim += 10
        imgBoa.style.top = `${positionBoa}px`
        imgRuim.style.top = `${positionRuim}px`

        imgBoa.angle += 10 
        imgBoa.style.transform = `rotate(${imgBoa.angle}deg)`
        imgRuim.angle += 10 
        imgRuim.style.transform = `rotate(${imgRuim.angle}deg)`
    
        if (positionBoa >= ingredientes.clientHeight) {
          clearInterval(intervalId)
          imgBoa.remove()
        }
    
        if (positionRuim >= ingredientes.clientHeight) {
          clearInterval(intervalId)
          imgRuim.remove()
        }
      }, 50)
      speed -= 50
      speed = speed <= 0 ? 1000 : speed;

    }, speed)
    
}

function escolherComida(img) {
    if (comidasEscolhidas.length == 3){
        let ingredientes = document.getElementById('ingredientes');
        ingredientes.remove()

        let prato = document.getElementById('prato');
        prato.innerHTML = 
        "<div class='d-flex justify-content-center align-items-center w-100' style='height: 500px;'>" +
            "<img id='prato-img' width='350px' height='350px'  src='../assets/images/prato.png' alt=''>"+
        "</div>";

        for (let i = 0; i < comidasEscolhidas.length; i++) {
            const imagemPequena = document.createElement('img');
            imagemPequena.src = '../assets/images/' + comidasEscolhidas[i];
            imagemPequena.style.width = '150px';
            imagemPequena.style.height = '150px';
            imagemPequena.style.position = 'absolute';

            switch (i){
                case 0:
                    imagemPequena.style.left = '100px';
                    imagemPequena.style.top = '60px';
                    break;
                case 1:
                    imagemPequena.style.left = '0px';
                    imagemPequena.style.top = '200px';
                    break;
                case 2:
                    imagemPequena.style.left = '200px';
                    imagemPequena.style.top = '200px';
                    break;
            }

            prato.appendChild(imagemPequena);
    }}
    else
    {
        comidasEscolhidas.push(img.srcElement.alt)
    }
}


gerarComidas()  