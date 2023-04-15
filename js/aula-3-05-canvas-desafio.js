//DESAFIO: 
//1) Quando clicarmos na tela pressionando a tecla SHIFT, vamos desenhar uma bolinha acrescida de 20 ao seu raio.

//=================================================================

const tela = document.querySelector('canvas');

const area = tela.getContext('2d');
area.fillStyle = 'silver';
area.fillRect(0, 0, 600, 400);

function exibeCirculo(e){  
  let x = e.pageX - tela.offsetLeft;
  let y = e.pageY - tela.offsetTop;  
  
  //1 - Armazenei um valores pra raio e acrescimo pensando em futuras alterações 
  let raio = 10;
  const raioAcrescimo = 20;

  //3 - Criei a condicional para caso a tecla shift esteja apertada é feito um acrescimo ao valor do raio 
  if(e.shiftKey){
    raio += raioAcrescimo;
  }

  const circulo = tela.getContext('2d');
  circulo.fillStyle = 'blue';  
  circulo.beginPath();
  circulo.arc(x, y, raio, 0, 2* 3.14);
  circulo.fill();
}

tela.onclick = exibeCirculo;