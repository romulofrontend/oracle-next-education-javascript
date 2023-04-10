const adivinhaCampo = document.querySelector(".adivinha-campo");

const adivinhaBotao = document.querySelector(".adivinha-botao");

const numeroSecreto = Math.round(Math.random() * 10);

console.log(numeroSecreto)

function adivinhaVerifica(){
  if(adivinhaCampo.value == numeroSecreto){
    alert("Você acertou!")
  }else{
    alert("Você errou!")
  }

  adivinhaCampo.value = "";
  adivinhaCampo.focus();
  
}

adivinhaBotao.onclick = adivinhaVerifica;