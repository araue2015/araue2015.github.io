// Encontre os elementos HTML pelo ID
const robo = document.getElementById('robo');
const balao = document.getElementById('balao');

// --- Código de Animação (mantido) ---
let roboX = 0;
let roboY = 0;
let mouseX = 0;
let mouseY = 0;
const suavizacao = 0.05;

document.addEventListener('mousemove', function(evento) {
    mouseX = evento.clientX - 25;
    mouseY = evento.clientY - 25;
});
// ------------------------------------

// Carregar o arquivo de áudio
const somDoClique = new Audio('src/little-robot-sound.mp3'); 
// --- NOVIDADE 1: Configurar o áudio para loop ---
somDoClique.loop = true; 

// Adicione um "ouvinte de evento" para o clique no robô
robo.addEventListener('click', function() {
    
    // Lógica para alternar visibilidade, cor e som
    if (balao.style.display === 'none' || balao.style.display === '') {
        // Quando o robô fica AZUL:
        balao.style.display = 'block';
        balao.textContent = "Estou azul e cantando! Clique para me calar.";
        robo.style.backgroundColor = "#3371FF"; // Azul

        // --- NOVIDADE 2: Tocar o som (ele já está configurado para loop) ---
        somDoClique.play(); 

    } else {
        // Quando o robô volta a ser VERDE:
        balao.style.display = 'none';
        robo.style.backgroundColor = "#4CAF50"; // Verde

        // --- NOVIDADE 3: Pausar o som e resetar o tempo ---
        somDoClique.pause();
        somDoClique.currentTime = 0; // Volta para o início para o próximo clique
    }
});

// --- Código da Função de Animação (mantido) ---
function animarRobo() {
    const dx = mouseX - roboX;
    const dy = mouseY - roboY;

    roboX += dx * suavizacao;
    roboY += dy * suavizacao;

    robo.style.left = roboX + 'px';
    robo.style.top = roboY + 'px';

    requestAnimationFrame(animarRobo);
}

// Inicia o ciclo de animação
animarRobo();
