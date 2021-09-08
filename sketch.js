function preload(){
  shipa = loadAnimation("ship-1.png","ship-2.png","ship-3.png", "ship-4.png");
  seaa= loadAnimation("sea.png");
}

function setup(){
createCanvas(400,400);
var sea = (300, 300, 300, 300);
sea.addAnimation("sea", seaa);

var ship = (100, 200, 100, 200);
ship.addAnimation("driving", shipa);
}

function draw() {
background("blue");
sea.velocityX -= 5;
drawSprites();
}