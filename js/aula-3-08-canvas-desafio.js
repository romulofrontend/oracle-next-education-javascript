//DESAFIO: 
//1) Se andarmos com o ponteiro do mouse sobre a tela enquanto o botão esquerdo é pressionado, vamos desenhar um círculo. Isso significa que enquanto não soltarmos o botão esquerdo, desenharemos um círculo ao lado do outro, que na verdade dará um efeito que estamos passando um pincel na tela. 
//2) Se soltarmos o botão esquerdo, o ato de mover o mouse sob a tela não deverá desenhar nada. No final, queremos um efeito parecido com ferramentas como Paint Brush ou Photoshop, que permite o usuário desenhar na tela. 
//2) Pressionar ALT e diminuir 5 do raio. raio minimo de 10


//=================================================================

const tela = document.querySelector('canvas');
const raio = 10;

//3) Crio uma variavel pra armazenar o valor do Mouse Down
let statusDesenhar;

const area = tela.getContext('2d');
area.fillStyle = 'silver';
area.fillRect(0, 0, 600, 400);

//1) Crio uma função pra desabilitar o Menu de Contexto
function desabilitarContextMenu(){
  return false
}
//2) Chamo a função atraves do evento associado a elemento/var tela
tela.oncontextmenu = desabilitarContextMenu;


//4) Crio uma função para testar o mouse down
function testarMouseDown(){
  statusDesenhar = true;
}
//5) Chamo a função atraves do evento associado a elemento/var tela 
tela.onmousedown = testarMouseDown;


//6) Crio uma função para testar o mouse down
function testarMouseUp(){
  statusDesenhar = false;
}
//7) Chamo a função atraves do evento associado a elemento/var tela 
tela.onmouseup = testarMouseUp;


function exibeCirculo(e){
  //8) Somente se com Mousedown ativo o circulo é gerado
  if(statusDesenhar){
    let posX = e.pageX - tela.offsetLeft;
    let posY = e.pageY - tela.offsetTop;
    
    const circulo = tela.getContext('2d');
    circulo.fillStyle = 'blue';
    circulo.beginPath();
    circulo.arc(posX, posY, raio, 0, 2 * 3.14);
    circulo.fill();
  }
}

//9) exibeCirculo é chamada pelo onmousemove associado a tela
tela.onmousemove = exibeCirculo;

