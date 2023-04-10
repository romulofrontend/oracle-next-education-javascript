const adivinhaCampo = document.querySelector(".adivinha-campo");

const adivinhaBotao = document.querySelector(".adivinha-botao");

const numeroSecreto = "5";

function adivinhaVerifica(){
  if(adivinhaCampo.value == numeroSecreto){
    document.write("Você acertou!")
  }else{
    document.write("Você errou!")
  }
}

adivinhaBotao.onclick = adivinhaVerifica;