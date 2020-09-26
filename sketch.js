//To Create Two Rectangles variables
var rect1;
var rect2;

//To Create Rect1 and Rect2 sprites
function setup() {
   createCanvas(800,400);
 rect1 = createSprite(400, 200, 50, 50);
 rect2 = createSprite(400, 200, 40, 40);
}


function draw() {
  background(255,255,255);  
  drawSprites();
  //To set the mouse position to rect1
  rect1.y = mouseY;
  rect1.x = mouseX;

  //To Give Color To Rect1 and Rect2
  rect1.shapeColor="red";
  rect2.shapeColor="green";

  //To change color of rectangles when they touch each other
  if(rect1.x-rect2.x<rect1.width/2+rect2.width/2 && rect2.x-rect1.x<rect1.width/2+rect2.width/2 && rect1.y-rect2.y<rect1.height/2+rect2.height/2 && rect2.y-rect1.y<rect1.height/2+rect2.height/2 )
  {
    rect1.shapeColor="blue";
    rect2.shapeColor="yellow";
  }
}