/**NAO ESTA DAND CERTO */
// Função para validar CPF

  
  // Função para acionar a validação do CPF ao enviar o formulário
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
      const cpfInput = document.getElementById('cpf');
      const cpfValue = cpfInput.value;
  
      if (!cpfValidacao(cpfValue)) {
        exibirErro('CPF inválido. Por favor, digite um CPF válido.');
        event.preventDefault(); // Impede o envio do formulário se o CPF for inválido
      }
    });
  });

// validacaoCPF.js

function calculaDV(num) {
    var resto = 0, soma = 0;
    for (i = 2; i < 11; i++) {
        soma = soma + ((num % 10) * i);
        num = parseInt(num / 10);
    }
    resto = (soma % 11);
    return (resto > 1) ? (11 - resto) : 0;
}


function cpfValidacao(cpf) {
    cpf = cpf.replace(/[^\d]/g, ''); // Remove caracteres não numéricos

    if (cpf.length !== 11 || !/^\d+$/.test(cpf)) {
        exibirErro('CPF inválido. Digite 11 dígitos numéricos.');
        return;
    }

    const identCPF = parseInt(cpf.substring(0, 9));
    const primeiro_digito = calculaDV(identCPF);
    const segundo_digito = calculaDV(identCPF * 10 + primeiro_digito);

    if (parseInt(cpf.charAt(9)) !== primeiro_digito || parseInt(cpf.charAt(10)) !== segundo_digito) {
        exibirErro('CPF inválido. Dígitos de verificação incorretos.');
    }

    function exibirErro(mensagem){
      document.getElementById('spanErro').textContent = mensagem;
    }
}