var path , pathImage;
var runner,runnerImage;
var boundry1 , boundry2;



function preload(){
  //pre-load images
  pathImage = loadImage("path.png");

  runnerImage= loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage("path",pathImage);
  path.scale = 1.2;

  runner= createSprite(200,250,50,50);
  runner.addAnimation("run",runnerImage);
  runner.scale=0.05
 


  boundry1 = createSprite(50,100,10,1000);
  boundry1.visible = false;
  

  boundry2 = createSprite(350,100,10,1000);
  boundry2.visible = false;

 
  
 
  
}

function draw() {
  background(0);

  runner.x = mouseX

  path.velocityY = 1;

if(path>400){
  path.y = height/4;
}

  runner.collide(boundry1)
    runner.collide(boundry2)
  
    

  drawSprites();
}
