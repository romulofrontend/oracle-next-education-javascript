const adivinhaCampo = document.querySelector(".adivinha-campo");

const adivinhaBotao = document.querySelector(".adivinha-botao");

const segredos = [4,5,6,7];

function verifica(){
  const adivinhaCampoValor = parseInt(adivinhaCampo.value);

  let achou = false;
  for(let i = 0; i < segredos.length; i++){
    if(adivinhaCampoValor === segredos[i]){
      alert("Você acertou");
      achou = true;
      i = segredos.length;
    }

    if(achou === false){
      alert("Você errou!"); 
    }
  }
}

adivinhaBotao.onclick = verifica;