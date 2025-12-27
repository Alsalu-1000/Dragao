// Espera a cena carregar
window.onload = () => {
    const personagem = document.querySelector('#meu-personagem');
    
    personagem.addEventListener('click', () => {
        alert("Você me encontrou! Bem-vindo à praça.");
        
        // Exemplo: Faz o personagem girar ao ser clicado
        personagem.setAttribute('animation', {
            property: 'rotation',
            to: '0 360 0',
            dur: 1000,
            easing: 'linear'
        });
    });
};
