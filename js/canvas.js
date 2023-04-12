const myScreen = document.querySelector(".myScreen");

const myBrush = myScreen.getContext('2d');

myBrush.fillStyle = 'green';
myBrush.fillRect(0, 0, 600, 400);

myBrush.fillStyle = "yellow";
myBrush.beginPath();
myBrush.moveTo(300,200);
myBrush.lineTo(50,200);
myBrush.lineTo(300,50);
myBrush.lineTo(550,200);
myBrush.lineTo(300, 350);
myBrush.lineTo(50, 200);
myBrush.fill();


myBrush.fillStyle = "blue";
myBrush.beginPath();
myBrush.arc(300,200, 100, 0, 2 * 3.14);
myBrush.fill();

