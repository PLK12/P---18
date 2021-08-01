var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg, boyImg2, endImg, gameDone;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;

var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
  //boyImg2 = loadImage("gameOver.png")
}

function setup(){
  //make this into a new window that is problem, tell Akash
  
  createCanvas(windowWidth,windowHeight);
  path=createSprite(windowWidth/2,windowHeight/2);
  path.addImage(pathImg);
  path.velocityY = 30;

  gameDone = createSprite(windowWidth/2, windowHeight/2,20,20)
  gameDone.addAnimation("gameOver.png",endImg);
  gameDone.visible = false;

  boy = createSprite(windowWidth,windowHeight - 100,20,20);
  boy.addAnimation("SahilRunning",boyImg);
  boy.scale=0.08;
  
  
  cashG=new Group();
  diamondsG=new Group();
  jwelleryG=new Group();
  swordGroup=new Group();

}

function draw() {
  

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  if(path.y > windowHeight )
  {
    path.y = windowHeight/2;
  }
  
  createCash();
  createDiamonds();
  createJwellery();
  createSword();

  if (cashG.isTouching(boy)) 
  {
    cashG.destroyEach();
    treasureCollection=treasureCollection+50;
  }
    else if (diamondsG.isTouching(boy))
    {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+100; 
    }
    else if(jwelleryG.isTouching(boy)) 
    {
      jwelleryG.destroyEach();
      treasureCollection=treasureCollection+150;  
    }
    else if(swordGroup.isTouching(boy)) 
      //p5editor link, github for this project link
      {
        gameState = END;
        boy.x = 0;
        boy.y = 0;
        gameDone.visible = true;
        boy.scale = 0.5;
        boy.stop();
        
    }
  
  if (gameDone.visible == true) 
  {
    path.velocityY = 0;

        
    cashG.destroyEach();
    cashG.setVelocityYEach(0);
    //cashG.velocityY=0;
    diamondsG.destroyEach();
    diamondsG.setVelocityYEach(0);
    jwelleryG.destroyEach();
    jwelleryG.setVelocityYEach(0);
    swordGroup.destroyEach();
    swordGroup.setVelocityYEach(0);
    text("Final Score = ",treasureCollection, width/6, height/12);
  }
  drawSprites();
  textSize(20);
  fill("green");
  text("Treasure: "+ treasureCollection,width/6,height/12);
  

}
//sword is not getting destroyed.

function createCash() 
{
  if (World.frameCount % 200 == 0) 
  {
    var cash = createSprite(Math.round(random(50, width - 40),40, 10, 10));
    cash.addImage(cashImg);
    cash.scale=0.12;
    cash.velocityY = 3;
    cash.lifetime = 200;
    cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0)
  {
    var diamonds = createSprite(Math.round(random(50, width-70),40, 10, 10));
    diamonds.addImage(diamondsImg);
    diamonds.scale=0.03;
    diamonds.velocityY = 3;
    diamonds.lifetime = 150;
    diamondsG.add(diamonds);
  }
}

function createJwellery() {
  if (World.frameCount % 410 == 0)
  {
    var jwellery = createSprite(Math.round(random(50, width - 50),40, 10, 10));
    jwellery.addImage(jwelleryImg);
    jwellery.scale=0.13;
    jwellery.velocityY = 3;
    jwellery.lifetime = 150;
    jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) 
  {
    var sword = createSprite(Math.round(random(50, width-60),40, 10, 10));
    sword.addImage(swordImg);
    sword.scale=0.1;
    sword.velocityY = 3;
    sword.lifetime = 150;
    swordGroup.add(sword);
  }}}
