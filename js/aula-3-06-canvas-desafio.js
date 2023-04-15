//DESAFIO: 
//1) Toda vez que o usuário clicar na tela com o SHIFT pressionado, vamos somar 10 ao valor do raio atual. 
//2) Sendo assim, mesmo soltando o SHIFT as próximas bolinhas utilizarão o mesmo valor de raio. Se clicarmos diversas vezes segurando SHIFT teremos uma bola cada vez maior.

//=================================================================

const tela = document.querySelector('canvas');

const area = tela.getContext('2d');
area.fillStyle = 'silver';
area.fillRect(0, 0, 600, 400);

//1 - As variaveis relativas a raio devem estar em escopo global para que possam ser alteradas ao final da leitura das funções
let raio = 10;
const raioIncremento = 10;

function exibeCirculo(e){  
  let x = e.pageX - tela.offsetLeft;
  let y = e.pageY - tela.offsetTop;

  //2 - Criei a condicional para caso a tecla shift esteja apertada é feito o incremento ao valor do raio 
  if(e.shiftKey){
    raio += raioIncremento;
  }

  const circulo = tela.getContext('2d');
  circulo.fillStyle = 'blue';  
  circulo.beginPath();
  circulo.arc(x, y, raio, 0, 2* 3.14);
  circulo.fill();
}

tela.onclick = exibeCirculo;