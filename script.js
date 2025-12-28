// Espera a cena carregar
window.onload = () => {
    const dragao = document.querySelector('#meu-dragao');
    const som = document.querySelector('#som-dragao');

    dragao.addEventListener('click', () => {
        // Toca o som manualmente via JavaScript
        som.play().catch(e => console.log("Erro ao tocar áudio:", e));
        
        // Pequena animação de "rugido" (escala)
        dragao.setAttribute('animation__roar', {
            property: 'scale',
            to: '0.55 0.55 0.55',
            dur: 100,
            dir: 'alternate',
            loop: 2
        });
    });
};
