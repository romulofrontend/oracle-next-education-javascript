var tela = document.querySelector('.tela');

var pincel = tela.getContext('2d');

function createSquare(color,  colorStroke, positionX, positionY, sizeX, sizeY){
  pincel.fillStyle = color;
  pincel.fillRect(positionX, positionY,sizeX,sizeY);
  pincel.fillStroke = colorStroke;
  pincel.strokeRect(positionX, positionY,sizeX,sizeY);
}

createSquare('red', 'black', 0, 0, 100, 100);
createSquare('green', 'black', 100, 0, 100, 100);
createSquare('blue', 'black', 200, 0, 100, 100)
createSquare('yellow', 'black', 300, 0, 100, 100)

createSquare('yellow', 'black', 0, 100, 100, 100)
createSquare('blue', 'black', 100, 100, 100, 100)
createSquare('green', 'black', 200, 100, 100, 100);
createSquare('red', 'black', 300, 100, 100, 100);