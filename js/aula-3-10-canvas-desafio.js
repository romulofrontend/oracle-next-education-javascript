//DESAFIO: 
//1) dicionar um input em nossa página logo após o canvas. No mundo HTML, existe o input do tipo color, que ao ser clicado exibe uma paleta de cores para podermos selecionar. 
//2) Recarregue a página e experimente clicar no novo elemento que será exibido na página. Automaticamente será exibido uma paleta de cores. Escolha uma cor qualquer e quando você escolhe uma cor, o input sabe a cor que você guardou. Dessa forma, podemos reutilizar a informação para desenhar com diferentes cores. 
//3) buscar no mundo HTML um input e extrair seu valor? Se conseguirmos fazer isso, podemos usar o valor na propriedade pincel.fillStyle na hora de desenhar o nosso círculo.

//=================================================================

//2) Criei a variavel pra manipular o input e com isso acessar as propriedades do elemento
const paleta = document.querySelector("#paletaCores");

const tela = document.querySelector('canvas');
const raio = 10;
let statusDesenhar;

const area = tela.getContext('2d');
area.fillStyle = 'silver';
area.fillRect(0, 0, 600, 400);

tela.oncontextmenu = function (){
  return false;
}

tela.onmousedown = function(){
  statusDesenhar = true;
}

tela.onmouseup = function(){
  statusDesenhar = false;
}

tela.onmousemove = function (e){  
  if(statusDesenhar){
    let posX = e.pageX - tela.offsetLeft;
    let posY = e.pageY - tela.offsetTop;
    
    const circulo = tela.getContext('2d');

    //3) Substituo o valor fixo pelo valor selecuinado no input color
    circulo.fillStyle = paleta.value;
    circulo.beginPath();
    circulo.arc(posX, posY, raio, 0, 2 * 3.14);
    circulo.fill();
  }
}


