//DESAFIO: 
//1) Permitir que o usuário altere a cor da bolinha que é desenhada na tela. 

//2) As cores serão obrigatoriamente blue, red e green. Perceba que temos uma lista de cores e isso deve remetê-lo à aula de Array

//3) A cada clique do botão DIREITO do mouse, a cor padrão, que é blue, deverá se tornar red. Se o usuário clicar mais uma vez com o botão DIREITO, a cor escolhida deverá ser green, nessa ordem. Por fim, se clicarmos novamente, voltamos para a cor blue e repetimos a ordem de seleção de cores.

//4) Com o botão ESQUERDO faremos os cliques para as bolinhas aparecerem.

//=================================================================

//1 - Criei variaveis pra acessar oe elementos no DOM
var tela = document.querySelector('canvas');


//2 - Criei e Determinei caracteristicas da area
var area = tela.getContext('2d');
area.fillStyle = 'gold';
area.fillRect(0,0, 600, 400);


//3 - Criei o array e um indice para depois iterá-lo
var cores = ['blue', 'red', 'green'];
var indiceCorAtual = 0;


//4 - Criei função exibir circulo
function exibeCirculo(e){
  //6 - Armazenei caracteristicas do evento que chama a função
  let x = e.pageX - tela.offsetLeft;
  let y = e.pageY - tela.offsetTop;

  //7 - Criei e Determinei caracteristicas do circulo  
  var circulo = tela.getContext('2d');
  circulo.fillStyle = cores[indiceCorAtual];  
  circulo.beginPath();
  circulo.arc(x, y, 25, 0, 2* 3.14);
  circulo.fill();
}


//5 - Atribui a chamada da função ao evento associando ao elemento
tela.onclick = exibeCirculo;


//8- Criei função para mudar cor do circulo
function trocaCor(){ 
  //10- Itero o array e atualizo as cores
  indiceCorAtual++;

  //11-Loop pra se manter dentro das cores do array
  if(indiceCorAtual >= cores.length){
    indiceCorAtual = 0;
  }

  //12- Pra não exibir o menu de contexto
  return false; 
}


 //9 - Atribui a chamada da função ao evento associando ao elemento
 tela.oncontextmenu = trocaCor;