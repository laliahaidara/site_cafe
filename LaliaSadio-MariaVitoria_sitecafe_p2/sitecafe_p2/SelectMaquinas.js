var img = document.getElementById('img');
var preco = document.getElementById('preco');

document.getElementById('piccolo').addEventListener('click', function() {
    preco.innerHTML = '';
    img.src = './img/Dulce_GustoP.jpg';
    preco.innerHTML = 'R$ 300,00';
    this.style.color = '#573218';
    this.style.font = 'Josefin Sans', sens-serif;
});

document.getElementById('c40').addEventListener('click', function() {
    preco.innerHTML = '';
    img.src = './img/Nespresso_InissiaP.jpg';
    preco.innerHTML = 'R$ 250,00';
    this.style.color = '#573218';
});

document.getElementById('uc50').addEventListener('click', function() {
    preco.innerHTML = '';
    img.src = './img/Nespresso_C50P.jpg';
    preco.innerHTML = 'R$ 250,00';
    this.style.color = '#573218';
});

document.getElementById('HD').addEventListener('click', function() {
    preco.innerHTML = '';
    img.src = './img/SenseoP.jpg';
    preco.innerHTML = 'R$ 250,00';
    this.style.color = '#573218';
});
