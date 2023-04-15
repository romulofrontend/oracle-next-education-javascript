//1 - Criar variavel pra acessar o elemento canvas
//2 - Criar variavel pra gerar e acessar o elemento area
//3 - Determinar cor da area (precisa ser antes de determinar suas medidas)
//4 - Determinar medidas da area (precisa ser antes de determinar suas medidas)
//5 - Criar função para exibir um alert. Passar um parametro na função para saber as informações/caracteristicas do evento que chama a função
//6 - Associar a função ao evento de click na tela

//1
const tela = document.querySelector('canvas');

//2
const area = tela.getContext('2d');

//3
area.fillStyle = 'darkgreen'
//4
area.fillRect(0,0,600,400)

//5
function exibirCirculo(e){
  //Criar variaveis pra armazenar valores dos eixos x e y informados pelo evento que dispara a função
  let x = e.clientX - tela.offsetLeft;
  let y = e.clientY - tela.offsetTop;
  
  //Gerar a figura do circulo a ser inserido a cada click

  //Determinar cor
  area.fillStyle = "yellow";
  //Iniciar o path/caminho
  area.beginPath();
  //Determinar eixox, eixoY, raio, angulo, contador anti-horario(2 PI para fechar o circulo)) Obs.: É preciso passar todos os parâmetros senão não funciona e gera erro no js
  area.arc(x, y, 25, 0, 2 * 3.14);
  //Determinar o fechamento do caminho e preenchimento do path
  area.fill();  
}
//OBS1.: chamo o evento de e seguindo uma convenção que entende e = evento assim como i = iteracao/contador 

//6
tela.onclick = exibirCirculo;
