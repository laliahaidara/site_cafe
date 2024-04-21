function opcoes(selectId) {
    var select = document.getElementById(selectId);
    var textarea = document.getElementById('msg');
    var total = document.getElementById('total');
    var valorSelecionado = Number(select.options[select.selectedIndex].value);
    var opcaoSelecionada = select.options[select.selectedIndex].text;
    textarea.value += opcaoSelecionada + '\n';

    var n1 = parseFloat(total.value) || 0;
    var novoVal = n1 + valorSelecionado;
    total.value = novoVal.toFixed(2)

}
