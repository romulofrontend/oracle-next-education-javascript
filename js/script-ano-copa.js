function pulaLinha(){
  document.write("<br><br>")
}

function mostra(frase){  
  document.write(frase);
  pulaLinha();
}

var copaInicio = 1930

var copaLimite = parseInt(prompt("Data Limite para as copas"))

while (copaInicio < copaLimite){
  mostra(copaInicio);
  copaInicio += 4;
}

mostra("Fim");