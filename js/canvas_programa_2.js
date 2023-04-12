var tela = document.querySelector('.tela');

var pincel = tela.getContext('2d');

function createSquare(color, positionX, positionY, sizeX, sizeY, colorStroke){
  pincel.fillStyle = color;
  pincel.fillRect(positionX, positionY,sizeX,sizeY);
  pincel.fillStroke = colorStroke;
  pincel.strokeRect(positionX, positionY,sizeX,sizeY);
}

createSquare('red',0,0,100,100,'black');
createSquare('green',100,0,100,100,'black');
createSquare('blue',200,0,100,100,'black')
createSquare('yellow',300,0,100,100,'black')

createSquare('yellow',0,100,100,100,'black')
createSquare('blue',100,100,100,100,'black')
createSquare('green',200,100,100,100,'black');
createSquare('red',300,100,100,100,'black');