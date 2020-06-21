var fixedRect, movingRect

function setup() {
  createCanvas(800,400);
  
  fixedRect = createSprite(400,200);
  movingRect = createSprite(100,200);
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
  movingRect.velocityX= 3;
  fixedRect.velocityX=-3;
}

function draw() {
  background(255,255,255);  

  if(movingRect.width/2+fixedRect.width/2>movingRect.x-fixedRect.x
    && movingRect.width/2+fixedRect.width/2>fixedRect.x-movingRect.x
    && movingRect.height/2+fixedRect.height/2>movingRect.y-fixedRect.y
    && movingRect.height/2+fixedRect.height/2>fixedRect.y-movingRect.y){
    movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
  movingRect.velocityX = movingRect.velocityX*(-1);
  fixedRect.velocityX = fixedRect.velocityX*(-1);
  }
  else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }

 // movingRect.y=mouseY;
 // movingRect.x = mouseX;
  drawSprites();
}