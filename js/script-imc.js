function pulaLinha(){
  document.write("<br><br>")
}

function mostra(frase){  
  document.write(frase);
  pulaLinha();
}


function calculaImc(peso, altura, usuario){
  var imc = Math.round(peso/altura**2);
  mostra ("IMC de " + usuario + ": " + imc);
}

var flavioAltura = 1.71;
var flavioPeso = 73;
var flavioUsuario = "Flavio"

var romuloAltura = 1.89;
var romuloPeso = 125;
var romuloUsuario = "Romulo"

calculaImc(romuloPeso, romuloAltura, romuloUsuario);
calculaImc(flavioPeso, flavioAltura, flavioUsuario);
