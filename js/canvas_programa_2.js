var tela = document.querySelector('.tela');

var pincel = tela.getContext('2d');


function createSquareLine(color, positionX, positionY, sizeX, sizeY, colorStroke){
  while(positionX < 600){
    pincel.fillStyle = color;
    pincel.fillRect(positionX, positionY,sizeX,sizeY);
    pincel.fillStroke = colorStroke;
    pincel.strokeRect(positionX, positionY,sizeX,sizeY);
    positionX += 100;
  }
}

sizeX = 100;
sizeY = 100;
colorStroke = 'black'

createSquareLine('red',0,0,sizeX,sizeY,colorStroke);

createSquareLine('green',0,100,sizeX,sizeY,colorStroke);

createSquareLine('blue',0,200,sizeX,sizeY,colorStroke);

createSquareLine('yellow',0,300,sizeX,sizeY,colorStroke);

