var comidasEscolhidas = []


function gerarComidas(element) {
    if ( comidasEscolhidas.length < 3) {
        const comidasBoas = ['brocolis.png', 'cenoura.png', 'arroz.png', 'feijao.png', 'alface.png', 'ceolinha.png', 'tomate.png', 'alho.png', 'onion.png', 'pimentao.png', 'maca.png', 'abacate.png']
        const comidasRuins = ['sorvete.png', 'batatinha.png', 'pizza.png', 'salgadinho.png', 'hamburger.png', 'coxinha.png', 'chocolate.png', 'bombom.png', 'cupcake.png', 'biscoito.png', 'rosquinha.png', 'brigadeiro.png']

        let ingredientes = document.getElementById('ingredientes');
        ingredientes.innerHTML = ''

        for ( let i = 0; i < 6 ; i++) {
            let ingrediente = document.createElement('div');
            ingrediente.className = 'ingrediente'

            
            let lista = Math.random() < 0.5 ? comidasBoas : comidasRuins ;
            
            const comida = lista[Math.floor(Math.random() * lista.length)];
            
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
    } 
    else {
        
    }
    console.log(comidasEscolhidas)
}

gerarComidas()  