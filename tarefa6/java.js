const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 10;

    function verificarPalpite() {
      const input = document.getElementById("palpite");
      const palpite = Number(input.value);
      const mensagem = document.getElementById("mensagem");
      const tentativasRestantes = document.getElementById("tentativasRestantes");

      if (palpite < 1 || palpite > 100) {
        mensagem.textContent = "Por favor, insira um número entre 1 e 100.";
        return;
      }

      tentativas--;

      if (palpite === numeroSecreto) {
        mensagem.textContent = `🎉 Parabéns! Você acertou o número secreto: ${numeroSecreto}`;
        tentativasRestantes.textContent = "";
        input.disabled = true;
      } else if (tentativas === 0) {
        mensagem.textContent = `😢 Fim de jogo! O número secreto era ${numeroSecreto}.`;
        tentativasRestantes.textContent = "";
        input.disabled = true;
      } else {
        mensagem.textContent = palpite < numeroSecreto
          ? "🔼 O número secreto é maior."
          : "🔽 O número secreto é menor.";
        tentativasRestantes.textContent = `Tentativas restantes: ${tentativas}`;
      }

      input.value = "";
      input.focus();
    }
