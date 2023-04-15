//1 - Criar variavel pra acessar o elemento canvas
//2 - Criar variavel pra gerar e acessar o elemento area
//3 - Determinar cor da area (precisa ser antes de determinar suas medidas)
//4 - Determinar medidas da area (precisa ser antes de determinar suas medidas)
//5 - Criar função para exibir um alert. Passar um parametro na função para saber as informações/caracteristicas do evento que chama a função
//6 - Associar a função ao evento de click na tela

//1
var tela = document.querySelector('canvas');

//2
var area = tela.getContext('2d');

//3
area.fillStyle = 'darkgreen'
//4
area.fillRect(0,0,600,400)

//5
function exibirAlerta(e){
  alert("Click OK")
  console.log(e);
}
//OBS.: chamo o evento de e seguindo uma convenção que entende e = evento assim como i = iteracao/contador 

//6
tela.onclick = exibirAlerta;
