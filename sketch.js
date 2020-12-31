
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var Ground,Ground_image
var PLAY=1
var END=0
var GAMESTATE=1
var SCORE=0
var SURVIVALTIME;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  Ground_image=loadImage("ground2.png")
  
}



function setup() {
createCanvas(600,200)
 monkey=createSprite(50,120,20,50)
monkey.addAnimation("running",monkey_running)
monkey.scale=0.1
  
ground=createSprite(600,190,300,10)
ground.velocityX=-4
ground.addImage("ground2.png",Ground_image)
  
invisibleGround = createSprite(200,195,400,10);
invisibleGround.visible=false
  
bananaGroup=createGroup()
obstacleGroup=createGroup()

  
}


function draw(){
background(200)
  
if(GAMESTATE===PLAY){         
 BANANANA();
spawnRocks();
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
 monkey.collide(invisibleGround);
stroke("black")
    textSize(20)
    fill("black")
    SURVIVALTIME=Math.ceil(frameCount/frameRate())
    text("Survival Time:"+SURVIVALTIME,100,50)
  
  
  if(keyDown("space")&&monkey.y >= 100) {
        monkey.velocity.y=-12
    }
  
  text("Score: "+ SCORE, 400,50);
  
  if(obstacleGroup.isTouching(monkey)){
   GAMESTATE=0 
    
    
    
    
    stroke("black")
    textSize(20)
    fill("black")
    SURVIVALTIME=Math.ceil(frameCount/frameRate())
    text("Survival Time"+SURVIVALTIME,100,50)
    
    
  }
  
  
  
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach()
   SCORE=SCORE+1 
    
    
    
  }
  
}
  
  
  
  if(GAMESTATE===0){
// so they get destroyed ad then they dont move so that the monkey doesn't keep scoring 
obstacleGroup.destroyEach();
obstacleGroup.setVelocityXEach(0);
bananaGroup.destroyEach();
bananaGroup.setVelocityXEach(0);
monkey.velocityY = monkey.velocityY + 0.8
   
  
 }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
drawSprites();  
}

function spawnRocks(){
if(frameCount%300===0){
obstacle=createSprite(200,170,20,20);  
obstacle.addImage("obstacle.png",obstacleImage)    
obstacle.velocityX=-3
obstacle.setLifetime=200
obstacle.scale=0.1
obstacleGroup.add(obstacle)

  
}
}







 function BANANANA() {
 if(frameCount %80===0){
  banana=createSprite(400,100,20,20)
  banana.y = Math.round(random(120,180))
  banana.addImage("banana.png",bananaImage)
  banana.velocityX=-3
  banana.scale=0.1
  banana.LifeTime=200
  bananaGroup.add(banana)
       
   } 






 }
