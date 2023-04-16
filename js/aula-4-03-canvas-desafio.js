
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
//1) Crio uma variavel global e em let referente ao eixoX para que possa se incrementada 
let circuloEixoX = 20;

//2) Crio a função atualiza tela para
function atualizarTela()
{
  //3) Limpar a tela antes de cada movimento da bolinha
  limparTela();

  //4) Criar o circulo passando como parametro a variavel a ser incrementada
  exibirCirculo(circuloEixoX, 200, 25);
  //5) Incrementar a variavel cada vez que a função for chamada
  circuloEixoX++;
}


//6) setInterval chama a função a cada 10ms
setInterval(atualizarTela, 10)

