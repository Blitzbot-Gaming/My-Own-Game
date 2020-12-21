var hitmanImg, hitman, gunsImg, guns, backgroundImg, targetImg, target;

function preload(){  
  hitmanImg = loadImage("Images/hitman_PNG26.png");
  gunsImg = loadImage("Images/guns.png");
  backgroundImg = loadImage("Images/Background.jpg");
  targetImg = loadImage("Images/counter-strike.png");
}

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
}

function draw() {
  background(backgroundImg);  
  guns.y = mouseY;
  drawSprites();
}