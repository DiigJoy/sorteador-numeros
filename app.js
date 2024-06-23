function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    let sorteados = [];
    let numero;
    let resultado = document.getElementById('resultado');

    if (isNaN(quantidade) || isNaN(de) || isNaN(ate) || quantidade > ate - de + 1 || ate < de) {
        resultado.innerHTML = `<label class="texto__paragrafo">Introduza valores válidos em todos os campos</label>`;
        alterarStatusBotao();
    } else {
        for (let i = 0; i < quantidade; i++) {
            numero = obterNumeroAleatorio(de, ate);
            
            while (sorteados.includes(numero)) {
                numero = obterNumeroAleatorio(de, ate);
            }  
            sorteados.push(numero);
        }
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
        alterarStatusBotao();
    }
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
            botao.classList.remove('container__botao-desabilitado');
            botao.classList.add('container__botao');
    }
}

function alterarStatusBotao2() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao')) {
            botao.classList.remove('container__botao');
            botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarStatusBotao2();
}