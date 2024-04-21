function openWindow(nome, quantidade, urlImagem, produtos) {
    const largura = 280;
    const altura = 530;
    const esquerda = (screen.width / 2) - (largura / 2);
    const topo = (screen.height / 2) - (altura / 2);
    const recursos = `width=${largura},height=${altura},left=${esquerda},top=${topo}`;
    
    const html = `
        <html>
            <head>
            <link rel="stylesheet" type="text/css" href="./css/saches.css">
                <title>${nome}</title>
            </head>
            <body>
                <h1 class="windowh1">${nome}</h1>
                <p class="Pwindow">Quantidade de sachês ou cápsulas: ${quantidade}</p>
                <img src="${urlImagem}" alt="Imagem da caixa">
                <ul id="windowUL">
                    ${produtos.split('\n').map(item => `<li class="LIwindow">${item}</li>`).join('')}
                </ul>
                <button onclick="window.close()">Fechar</button>
            </body>
        </html>`;

    const janela = window.open('', '', recursos);
    janela.document.write(html);
}

