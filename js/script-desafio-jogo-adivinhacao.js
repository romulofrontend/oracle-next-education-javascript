function pulaLinha() {
  document.write("<br>");
}

function mostra(frase) {

  document.write(frase);
  pulaLinha();
}

function sorteia(n){
  return Math.round(Math.random() * n);
}

var numeroPensado = sorteia(10);

var chute = parseInt(prompt("Já pensei. Qual você acha que é?"));

if(chute == numeroPensado) {
  mostra("Uau! Você acertou, pois eu pensei no " + numeroPensado);
} else {    
  if(chute < numeroPensado){
    mostra("Você errou! Seu chute é menor que o Número Pensado pelo Programa.");
  }else{
    mostra("Você errou! Seu chute é maior que o Número Pensado pelo Programa.");
  }
}