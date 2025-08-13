// Script para o relógio digital
function updateClock() {
    const clockElement = document.getElementById('clock');
    
    if (clockElement) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        
        clockElement.textContent = `${hours}:${minutes}`;
    }
}

// Script para esconder as mensagens após 3 segundos
setTimeout(() => {
    const messagesWrapper = document.getElementById('messages-wrapper');
    
    if (messagesWrapper) {
        messagesWrapper.style.transition = 'opacity 0.5s ease';
        messagesWrapper.style.opacity = '0';
        
        // Remove o elemento do DOM após a transição para colapsar o espaço
        setTimeout(() => {
            messagesWrapper.style.display = 'none';
        }, 500);
    }
}, 3000);

// Atualiza o relógio imediatamente e depois a cada segundo
updateClock();
setInterval(updateClock, 1000);
