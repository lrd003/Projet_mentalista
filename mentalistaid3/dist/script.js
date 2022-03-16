var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var armazenaChute = parseInt(document.getElementById("valor").value);

  if (armazenaChute == numeroSecreto) {
    elementoResultado.innerHTML =
      "Parabéns, você acertou !!! O numero secreto era: " + numeroSecreto;
  } else if (armazenaChute > 10 || armazenaChute < 0) {
    elementoResultado.innerHTML =
      "Desculpe, mas escolha um número entre 0 e 10";
  } else {
    elementoResultado.innerHTML = "Poxa vida, você errou!!!";
  }
}