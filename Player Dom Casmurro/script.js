let botaoPlayPause = document.getElementById("play-pause");
let botaoProximo = document.getElementById('proximo');
let botaoAnterior = document.getElementById('anterior');
let audioCapitulo = document.getElementById("audio-capitulo");
let capitulo = document.getElementById('capitulo');

let numerosCapitulos = 10;
let capituloAtual = 1;
let estaTocando = false;



function atualizacao(capituloAtual) {
    capitulo.innerHTML = `Capitulo ${capituloAtual}`
    audioCapitulo.setAttribute('src', `./books/dom-casmurro/${capituloAtual}.mp3`);
} atualizacao(capituloAtual)


//funcções auxiliatrs
function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.add('bi-pause-circle-fill');
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    estaTocando = !estaTocando;
}

function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.add('bi-play-circle-fill');
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    estaTocando = !estaTocando;
}


//Eventos
botaoPlayPause.addEventListener('click', playPause);
botaoProximo.addEventListener('click', proximaFaixa);
botaoAnterior.addEventListener('click', voltarFaixa);
audioCapitulo.addEventListener('ended', proximaFaixa);


//funções de eventos
function playPause() {
    !estaTocando ? tocarFaixa() : pausarFaixa();

}

function proximaFaixa() {
    if (capituloAtual === numerosCapitulos) {
        capituloAtual = 1
    } else {
        capituloAtual++
    }

    atualizacao(capituloAtual)
    audioCapitulo.play();
}

function voltarFaixa() {
    if (capituloAtual === 1) {
        capituloAtual = 1
    } else {
        capituloAtual--
    }

    atualizacao(capituloAtual)
    audioCapitulo.play();
}

