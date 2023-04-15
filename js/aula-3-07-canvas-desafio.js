//DESAFIO: 
//1) Pressionar SHIFT e aumentar 10 do raio. O raio não pode ultrapassar de 40. 
//2) Pressionar ALT e diminuir 5 do raio. raio minimo de 10


//=================================================================

const tela = document.querySelector('canvas');

const area = tela.getContext('2d');
area.fillStyle = 'silver';
area.fillRect(0, 0, 600, 400);

//1 - As variaveis relativas a raio devem estar em escopo global para que possam ser alteradas ao final da leitura das funções
let raio = 10;
const raioIncremento = 10;
const raioDecremento = 5;
const raioMaximo = 40;
const raioMinimo = 10;


function exibeCirculo(e){  
  let posX = e.pageX - tela.offsetLeft;
  let posY = e.pageY - tela.offsetTop;

  let condShiftAlt = e.shiftKey && e.altKey;
  let condShifIncrementoMax = e.shiftKey && raio + raioIncremento <= raioMaximo;
  let condAltDecrementoMax = e.altKey && raio - raioDecremento >= raioMinimo;

  //2 - Criei as condicionais para caso a tecla shift esteja apertada é feito o incremento ao valor do raio 
  if (condShiftAlt) {
    alert('Só aperte uma tecla por vez, por favor!');
  }else{
    if(condShifIncrementoMax){
      raio += raioIncremento;
    }  
    if(condAltDecrementoMax){
      raio -= raioDecremento;
    }
  }


  const circulo = tela.getContext('2d');
  circulo.fillStyle = 'blue';
  circulo.beginPath();
  circulo.arc(posX, posY, raio, 0, 2* 3.14);
  circulo.fill();
  console.log(raio)
}

tela.onclick = exibeCirculo;