/**NAO ESTA DAND CERTO */

function bandeiraVerificacao() {
    var numeroCartao = document.getElementById("num").value;

    document.getElementById("visa").checked = false;
    document.getElementById("master").checked = false;
    document.getElementById("amex").checked = false;

    var primeiroDigito = parseInt(numeroCartao.charAt(0));

    if (primeiroDigito === 4) {
        document.getElementById("visa").checked = true;
    } else if (primeiroDigito === 3) {
        var segundoDigito = parseInt(numeroCartao.charAt(1));
        if (segundoDigito === 4 || segundoDigito === 7) {
            document.getElementById("amex").checked = true;
        } else {
        erroCartao('Cartão Inválido!!');
        }
    } else if (primeiroDigito === 5) {
        var doisDigitos = parseInt(numeroCartao.slice(0, 2));
        if (doisDigitos >= 51 && doisDigitos <= 55) {
            document.getElementById("master").checked = true;
        } else {
        erroCartao('Cartão Inválido!!');
        }
    } else {
        erroCartao('Cartão Inválido!!');
    }
    function erroCartao(mensagem){
        document.getElementById('erro-cartao').textContent = mensagem;

    }
}

