function detectAdBlock() {
    const testAd = document.createElement('div');
    testAd.innerHTML = '&nbsp;';
    testAd.className = 'adsbox';
    document.body.appendChild(testAd);

    // Verifica se o bloqueador de anúncios está bloqueando o elemento "adsbox"
    if (testAd.offsetHeight === 0) {
        document.getElementById('adblock-alert').style.display = 'block';
    }
    document.body.removeChild(testAd);
}

// Executa a função após o carregamento da página
window.onload = detectAdBlock;
