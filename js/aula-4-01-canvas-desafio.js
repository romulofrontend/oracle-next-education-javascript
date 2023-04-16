const tela = document.querySelector(".tela");

const area = tela.getContext('2d');
area.fillStyle = 'gold';
area.fillRect(0,0,600,400);
area.fill()


const circuloAngulo = 0;
const circuloArea = 2 * Math.PI; 


function exibirCirculo(circuloEixoX, circuloEixoY, circuloRaio)
{  
  const circulo = tela.getContext('2d');
  circulo.fillStyle = 'black';
  circulo.beginPath();
  circulo.arc(circuloEixoX, circuloEixoY, circuloRaio, circuloAngulo, circuloArea);
  circulo.fill();
}

exibirCirculo(20, 20, 10)

exibirCirculo(300, 200, 100)
