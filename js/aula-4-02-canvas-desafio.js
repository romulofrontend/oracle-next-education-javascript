// 1) Peguei o elemento do canvas no dom
const tela = document.querySelector(".tela");

//2) Crei e informei as caracteristicas do elemento area dentro de tela
const area = tela.getContext('2d');
area.fillStyle = 'gold';
area.fillRect(0,0,600,400);
area.fill()

//5) Crei variaveis para alguns dos valores chamados por parametros
let circuloEixoX;
const circuloAngulo = 0;
const circuloArea = 2 * Math.PI; 

//3) Crei e informei as caracteristicas do elemento circulo dentro de tela
const circulo = tela.getContext('2d');

//4) Crei a função para exibirCirculo já passando parametros
function exibirCirculo(circuloEixoX, circuloEixoY, circuloRaio)
{  
  circulo.fillStyle = 'black';
  circulo.beginPath();
  circulo.arc(circuloEixoX, circuloEixoY, circuloRaio, circuloAngulo, circuloArea);
  circulo.fill();
}

//6) Crei essa fução pra Limpar a tela conforme a animação ocorra
function limpaTela()
{
  circulo.clearRect(0,0, 600, 400);
}

//7) Chamo a função pra limpartela
limpaTela()


//8) Chamo exibirCirculo informando parametros 
exibirCirculo(circuloEixoX, 20, 10)

//OBS.: Preparando para a animação