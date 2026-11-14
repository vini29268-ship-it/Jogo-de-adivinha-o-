
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

let tentativas = 0;

const campoPalpite = document.getElementById("palpite");
const botaoTentar = document.getElementById("btnTentar");
const botaoReiniciar = document.getElementById("btnReiniciar");
const mensagem = document.getElementById("mensagem");
const contador = document.getElementById("tentativas");

botaoTentar.addEventListener("click", function() {

    const palpite = Number(campoPalpite.value);

    if (campoPalpite.value === "" || palpite < 1 || palpite > 100) {
        mensagem.textContent = "Digite um número entre 1 e 100!";
        return;
    }

    tentativas++;

    contador.textContent = "Tentativas: " + tentativas;

    if (palpite === numeroSecreto) {

        mensagem.textContent = "🎉 Parabéns! Você acertou!";
        botaoTentar.disabled = true;

    } else if (palpite < numeroSecreto) {

        mensagem.textContent = "⬆️ Tente um número maior!";

    } else {

        mensagem.textContent = "⬇️ Tente um número menor!";

    }

    campoPalpite.value = "";
    campoPalpite.focus();

});

botaoReiniciar.addEventListener("click", function() {

    numeroSecreto = Math.floor(Math.random() * 100) + 1;

    tentativas = 0;

    contador.textContent = "Tentativas: 0";

    mensagem.textContent = "Novo jogo iniciado! Boa sorte!";

    campoPalpite.value = "";

    botaoTentar.disabled = false;

});
