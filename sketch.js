var fixedRect, movingRect;

function setup() {
  createCanvas(600,600);
  fixedRect = createSprite(400, 400, 50, 50);
  fixedRect.shapeColor = "blue";
  movingRect = createSprite(400, 100, 50, 50);
  movingRect.shapeColor = "blue";
}

function draw() {
  background("yellow");  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 && 
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 && 
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  drawSprites();
}