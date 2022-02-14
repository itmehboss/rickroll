var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bg, bgimg;
var player ,playerimg;
var laser,laserimg,laserGroup;
var shoot = 0;


function preload(){
laserimg
    bgimg = loadImage("background.jpg")
    playerimg = loadImage("player.png");
    laserimg = loadImage("laser.png");
}


function setup(){
createCanvas(1500,700)
    bg = createSprite(500,300);
    bg.addImage(bgimg);
    bg.scale = 3.0;
    bg.velocityX = -3;


    player = createSprite(100,450);
    player.addImage(playerimg);
    player.scale = 0.5;

laserGroup = new Group;
}

function draw(){

    background(30);

if(gameState === PLAY){

    if(bg.x<0){
        bg.x = bg.width/2;
    }
    
    if(keyDown("UP_ARROW")){
        player.y = player.y - 4;
      
      }
      if(keyDown("DOWN_ARROW")){
        player.y = player.y + 4;
      
      }
      
        
      if(keyDown("LEFT_ARROW")){
        player.x = player.x - 4;
       
      }
      if(keyDown("RIGHT_ARROW")){
        player.x = player.x + 4;
      
      }

       
  shoot = shoot-1
  if(keyDown("space") && shoot <0){
  laser = createSprite(player.x,player.y);
  laser.addImage(laserimg);
  laser.velocityX = 5 ;
  laserGroup.add(laser);
  shoot = laser.x;
  laser.scale = 0.25;
 
  }


}


    
    drawSprites();
}