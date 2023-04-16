//DADO SEGUINTE SCRIPT: 
const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

//3) Como os valores de x e y eram repetidos criei variaveis 
const posX = 300;
const posY = 200;
const raio = 10;


function desenhaCirculo(x, y, raio, cor) {
  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
}

//4) Substitui os valores repetidos pelas variaveis referentes
desenhaCirculo(posX, posY, raio + 20, 'red'); // maior írculo
desenhaCirculo(posX, posY, raio + 10, 'white');
desenhaCirculo(posX, posY, raio, 'red'); // menor circulo

//1) transformei dispara em funcao anonima
tela.onclick = function(e) {
  var x = e.pageX - tela.offsetLeft;
  var y = e.pageY - tela.offsetTop;
  
  //2) Testei baseado nas medidas do alvo
  if 
  //5) Substitui os valores repetidos pelas variaveis referentes
  ((x > posX - raio) &&
  (x < posX + raio) &&
  (y > posY - raio) &&
  (y < posY + raio)) {
    alert("Acertou na mosca!");
  }else{
    alert("Você errou!");
  }
}