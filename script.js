// Canvas - Fishing Scene

// Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// top-left corner (0,0)
// top-right corner (400,0)
// bottom-left corner (0,400)
// bottom-right corner (400,400)

// Sky
ctx.fillStyle = "lightblue";
ctx.fillRect(0, 0, 400, 400);

// Water
ctx.fillStyle = "blue";
ctx.fillRect(0, 250, 400, 150);

// Pier landing
ctx.fillStyle = "brown";
ctx.fillRect(0, 200, 250, 25);

// Pier posts
ctx.lineWidth = 10;
ctx.strokeStyle = "brown";

ctx.beginPath();
ctx.moveTo(10, 150);
ctx.lineTo(10, 400);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(60, 150);
ctx.lineTo(60, 400);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(110, 150);
ctx.lineTo(110, 400);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(160, 150);
ctx.lineTo(160, 400);
ctx.stroke();

// Sun
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(75, 50, 20, 0, 2 * Math.PI);
ctx.fill();

// Fish Head 1
ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(220, 300, 10, 0, 2 * Math.PI);
ctx.fill();

// Fish Tail 1
ctx.beginPath();
ctx.moveTo(220, 300);
ctx.lineTo(240, 290);
ctx.lineTo(240, 310);
ctx.fill();

// Fish Head 2
ctx.fillStyle = "cyan";
ctx.beginPath();
ctx.arc(300, 325, 10, 0, 2 * Math.PI);
ctx.fill();

// Fish Tail 2
ctx.beginPath();
ctx.moveTo(300, 325);
ctx.lineTo(320, 315);
ctx.lineTo(320, 335);
ctx.lineTo(300, 325);
ctx.fill();

// Stickman

// Head - stroke circle (arc) at (250, 140) with radius 15
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.beginPath();
ctx.arc(250, 140, 15, 0, 2 * Math.PI);
ctx.stroke();

// Torso
ctx.beginPath();
ctx.moveTo(248, 155);
ctx.lineTo(243, 195);
ctx.stroke();

// Upper Leg
ctx.beginPath();
ctx.moveTo(243, 195);
ctx.lineTo(265, 205);
ctx.stroke();

// Lower Leg
ctx.beginPath();
ctx.moveTo(265, 205);
ctx.lineTo(270, 230);
ctx.stroke();

// Arm
ctx.beginPath();
ctx.moveTo(246, 170);
ctx.lineTo(280, 180);
ctx.stroke();

// Fishing Pole
ctx.strokeStyle = "grey";
ctx.beginPath();
ctx.moveTo(275, 190);
ctx.lineTo(350, 100);
ctx.stroke();

// Fishing Line
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(350, 100);
ctx.lineTo(350, 300);
ctx.stroke();

// Cloud Image
var cloudImg = document.getElementById("cloudEl");
ctx.drawImage(cloudImg, 100, 50, 90, 90);
ctx.drawImage(cloudImg, 200, 0, 90, 90);

// Text
ctx.font = "15px Arial";
ctx.fillStyle = "white";
ctx.fillText("Art by Priyanka B", 275, 385);
