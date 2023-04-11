var comidasEscolhidas = []


function gerarComidas(element) {
    if ( comidasEscolhidas.length < 3) {
        let comidasGeradas = [];
        const comidasBoas = ['brocolis.png', 'cenoura.png', 'arroz.png', 'feijao.png', 'alface.png', 'ceolinha.png', 'tomate.png', 'alho.png', 'onion.png', 'pimentao.png', 'maca.png', 'abacate.png']
        const comidasRuins = ['sorvete.png', 'batatinha.png', 'pizza.png', 'salgadinho.png', 'hamburger.png', 'coxinha.png', 'chocolate.png', 'bombom.png', 'cupcake.png', 'biscoito.png', 'rosquinha.png', 'brigadeiro.png']

        let ingredientes = document.getElementById('ingredientes');
        ingredientes.innerHTML = ''

        for ( let i = 0; i < 6 ; i++) {
            let ingrediente = document.createElement('div');
            ingrediente.className = 'ingrediente'

            
            let lista = Math.random() < 0.5 ? comidasBoas : comidasRuins ;
            let comida = lista[Math.floor(Math.random() * lista.length)];

            if ( comidasGeradas.indexOf(comida) == -1 ){
                comidasGeradas.push(comida)
            } else {
                while ( comidasGeradas.indexOf(comida) != -1){
                    comida = lista[Math.floor(Math.random() * lista.length)];
                }
                comidasGeradas.push(comida)
            }

            let imagem = document.createElement('img');
            imagem.src = `../assets/images/${comida}`
            imagem.alt = comida;
            
            ingrediente.append(imagem)

            ingrediente.addEventListener('click', gerarComidas )

            ingredientes.append(ingrediente);
        }
        if ( element != undefined && element != null){
            comidasEscolhidas.push(element.srcElement.alt);
        }

        if ( comidasEscolhidas.length == 3){
            let ingredientes = document.getElementById('ingredientes');
            ingredientes.remove()

            let prato = document.getElementById('prato');
            prato.innerHTML = 
            "<div class='d-flex justify-content-center align-items-center w-100' style='height: 500px;'>" +
                "<img id='prato-img' width='350px' height='350px'  src='../assets/images/prato.png' alt=''>"+
            "</div>";

            let pratoImg = document.getElementById('prato-img');

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
              }

        }
    } 
    console.log(comidasEscolhidas)
}

gerarComidas()  