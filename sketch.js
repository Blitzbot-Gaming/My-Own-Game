var hitmanImg, hitman, gunsImg, guns, backgroundImg, targetImg, target, bulletImg, bullet;
var bloodImg, blood, winImg, win;

function preload(){  
  hitmanImg = loadImage("Images/hitman_PNG26.png");
  gunsImg = loadImage("Images/guns.png");
  backgroundImg = loadImage("Images/Background.jpg");
  targetImg = loadImage("Images/counter-strike.png");
  bulletImg = loadImage("Images/bullet.png");
  bloodImg = loadImage("Images/Blood.jpg");
  winImg = loadImage("Images/Win.png");

function setup() {
  createCanvas(1534,760);

  hitman = createSprite(200,500,100,100);
  hitman.addImage("killer",hitmanImg);
  hitman.scale = 0.14;

  guns = createSprite(320,490,100,100);
  guns.addImage("kill",gunsImg);
  guns.scale = 0.15


  target = createSprite(1400,500,100,100);
  target.addImage("eliminate",targetImg);
  target.scale = 1.5

  bullet = createSprite(320,600,100,100);
  bullet.addImage("death", bulletImg);
  bullet.scale = 0.2

  blood = createSprite(1400,500,100,100);
  blood.addImage("bloody", bloodImg);

  win = createSprite(1200,800,100,100);
  win.addImage("victory", winImg);
}

function draw() {
  background(backgroundImg);  
  guns.y = mouseY;
  if(keyDown(RIGHT_ARROW)){
    bullet.velocityX = 75;
  }
  bullet.y = guns.y;
  if(bullet.isTouching(target)){
    blood.visible = true;
  }
  else{
    blood.visible = false;
  }
  drawSprites();
}
}