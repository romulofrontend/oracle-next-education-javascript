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
let inicioEixoX = true;
let finalEixoX = false;


function atualizarTela()
{
  limparTela();
  
  exibirCirculo(circuloEixoX, 200, 25);

  //2) Testo SE circuloEixoX é igual o valor final do canvas, se passou do inicioEixoX E SE chegou ao finalEixoX
  if(circuloEixoX <= 600 && inicioEixoX && finalEixoX == false)
  {
    circuloEixoX++
  }

  //3) Se valor de circuloEixoX é igual ao final do canvas, altera os valores das variaveis inicioEixoX e finalEixoX
  if(circuloEixoX == 600)
  {
    inicioEixoX = false;
    finalEixoX = true;
  }

  //4) Testo SE circuloEixoX é igual o valor inicial do canvas, SE chegou ao finalEixoX E SE chegou ao inicioEixoX
  if(circuloEixoX >= 0 && inicioEixoX == false && finalEixoX)
  {
    circuloEixoX--
  }

  //3) Se valor de circuloEixoX é igual ao inicio do canvas, altera os valores das variaveis inicioEixoX e finalEixoX
  if(circuloEixoX == 0)
  {
    inicioEixoX = true;
    finalEixoX = false;
  }
}


setInterval(atualizarTela, 10)

