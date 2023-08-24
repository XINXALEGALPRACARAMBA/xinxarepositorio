const horas = document.getElementById('ANO');
const minutos = document.getElementById('DIA');
const segundos = document.getElementById('MINUTO');
const contadorElement = document.getElementById('contador'); // Elemento onde você deseja exibir o contador

let contador = 1.484;

function atualizarRelogio() {
    // Aqui você pode adicionar a lógica para atualizar o relógio, se necessário
}

function atualizarContador() {
    contador += 24.73;
    contadorElement.textContent = contador.toFixed(2); // Formata para duas casas decimais
}

atualizarRelogio(); // Atualize o relógio uma vez ao carregar a página
atualizarContador(); // Atualize o contador uma vez ao carregar a página

setInterval(atualizarContador, 60000); // Atualize o contador a cada 1 minuto (60000 milissegundos)
