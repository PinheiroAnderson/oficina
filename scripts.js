function atualizarSaudacao() {
    const agora = new Date();
    const hora = agora.getHours();
    const elemento = document.getElementById('meu-letreiro');
    let saudacao = "";

    if (hora >= 5 && hora < 12) {
        saudacao = "☀️ Bom dia! Seja bem-vindo ao nosso site.";
    } else if (hora >= 12 && hora < 18) {
        saudacao = "🌤️ Boa tarde! Esperamos que seu dia esteja sendo produtivo.";
    } else {
        saudacao = "🌙 Boa noite! Aproveite nosso conteúdo antes de descansar.";
    }

    elemento.innerText = saudacao;

    
    document.getElementById("anoAtual").textContent = new Date().getFullYear();
}


window.onload = atualizarSaudacao;