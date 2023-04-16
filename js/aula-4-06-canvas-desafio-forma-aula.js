// DESAFIO: Dado o código abaixo, altere para que o círculo, assim que chegar no canto direito da tela, volte. No final, o círculo deve ficar indo e voltando eternamente.
const tela = document.querySelector(".tela");

const area = tela.getContext('2d');
area.fillStyle = 'gold';
area.fillRect(0,0,600,400);
area.fill()


const circuloAngulo = 0;
const circuloArea = 2 * Math.PI; 
const circulo = tela.getContext('2d');

function exibirCirculo(circuloEixoX, circuloEixoY, circuloRaio)
{  
  circulo.fillStyle = 'black';
  circulo.beginPath();
  circulo.arc(circuloEixoX, circuloEixoY, circuloRaio, circuloAngulo, circuloArea);
  circulo.fill();
}

function limparTela()
{
  circulo.clearRect(0,0, 600, 400);
}


//1) Criei variaveis globais em let pq seus valores serão mudados
let circuloEixoX = 20;
let sentidoX;


function atualizarTela()
{
  limparTela();

  //2) Se circuloEixoX for acima de 600 ele diminui um através do sentido
  if(circuloEixoX > 600)
  {
    sentidoX = -1;
  }
  //3) Se circuloEixoX for abaixo ele soma um através do sentido
  else if(circuloEixoX < 0)
  {
    sentidoX = +1;
  }

  //4) Passo os parametros deexibirCirculo
  exibirCirculo(circuloEixoX, 200, 25);

  //5) circuloEixoX recebe os valores baseados nos testes acima 
  circuloEixoX = circuloEixoX + sentidoX;
}

setInterval(atualizarTela, 10)

