//DESAFIO: 
//1) Se andarmos com o ponteiro do mouse sobre a tela enquanto o botão esquerdo é pressionado, vamos desenhar um círculo. Isso significa que enquanto não soltarmos o botão esquerdo, desenharemos um círculo ao lado do outro, que na verdade dará um efeito que estamos passando um pincel na tela. 
//2) Se soltarmos o botão esquerdo, o ato de mover o mouse sob a tela não deverá desenhar nada. No final, queremos um efeito parecido com ferramentas como Paint Brush ou Photoshop, que permite o usuário desenhar na tela. 
//2) Pressionar ALT e diminuir 5 do raio. raio minimo de 10


//=================================================================

const tela = document.querySelector('canvas');
const raio = 10;

//1) Crio uma variavel global pra armazenar valores dos testes
let statusDesenhar = false;

const area = tela.getContext('2d');
area.fillStyle = 'silver';
area.fillRect(0, 0, 600, 400);

//2) Crio uma função pra mudar o valor da var statusDesenhar
function testLeftClick(){
  statusDesenhar = true;
}
//3) Chamo a função atraves do evento associado a elemento/var tela 
tela.oncontextmenu = testLeftClick;

function exibeCirculo(e){
  //4) Somente com statusDesenhar como tue é possivel desenhar
  if(statusDesenhar){
    let posX = e.pageX - tela.offsetLeft;
    let posY = e.pageY - tela.offsetTop;
    
    const circulo = tela.getContext('2d');
    circulo.fillStyle = 'blue';
    circulo.beginPath();
    circulo.arc(posX, posY, raio, 0, 2 * 3.14);
    circulo.fill();
  }

  //5) Desabilito a exibição do Context Menu
  return false
}

//6) exibeCirculo é chamada pelo oncontextemenu associado a tela
tela.oncontextmenu = exibeCirculo;