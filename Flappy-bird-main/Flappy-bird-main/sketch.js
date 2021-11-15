var bird
var birdimage
var pipe1
var bird2
var backgroundimage
var background
var pipe2
var edges 
function preload(){
  birdimage=loadImage ("bird1.png") 
  pipe1=loadImage ("Pipe.png");
  pipe2=loadImage("Pipe1.png");
  backgroundimage=loadImage("background.jpg");

  bird2=loadImage("bird2.png");

}

function setup(){
  createCanvas(displayWidth,650);
  /*background=createSprite(0,0,700,700);
background.addImage("background",backgroundimage);
background.scale=10*/
  bird=createSprite(100,300,100,200);
  bird.addImage("bird",birdimage);
  bird.addImage("bird1",bird2)
  bird.scale=0.2
  bird.velocityY=bird.velocityY+0.08
}

function draw(){
  background(backgroundimage);
  background.velocityX=-4
  if(background.x<0){
    background.x=background.width/2
  }
  drawSprites();
  if(keyDown("space")){
bird.velocityX=5
bird.velocityY = -5
bird.changeAnimation("bird1",bird2)
bird.scale=0.6
  }
  else{
    bird.velocityY = bird.velocityY +0.8
  }
  
  camera.x=bird.x;
  pipes();

}

function pipes(){
  if(frameCount %60 ===0){
    rand1 = Math.round(random(200,displayWidth))
    rand2 = Math.round(random(0,height))
  pipe = createSprite(rand1,rand2,30,height)
  
  rannd = Math.round(random(1,2))
  switch(rannd){
    case 1: pipe.addImage("pipe",pipe1)
            pipe.scale = 3
    break;
    case 2 :pipe.addImage("pipe",pipe2)
            pipe.scale = 5
    break;
    deafult:break
  }
  }
}
