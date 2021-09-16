var numeroSecreto = parseInt(Math.random() * 11);
let tentativas = 2;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  var chances = tentativas--;

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10.";
  } else if (chances > 0 && chute > numeroSecreto) {
    elementoResultado.innerHTML =
      "Você chutou muito alto! Mas ainda possui " +
      chances +
      " tentativas, tente novamente!";
  } else if (chances > 0 && chute < numeroSecreto) {
    elementoResultado.innerHTML =
      "Você chutou muito baixo! Mas ainda possui " +
      chances +
      " tentativas, tente novamente!";
  } else {
    elementoResultado.innerHTML =
      "Você errou! o número secreto era " + numeroSecreto + ".";
  }
}

function Resetar() {
  numeroSecreto = parseInt(Math.random() * 11);
  tentativas = 2;
}

