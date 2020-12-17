const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hitmanImg, gunsImg, backgroundImg, minesImg, hitman;

function preload(){  
 backgroundImg = loadImage("Images/Background.jpg");
}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  hitman = new Hitman(200,200,200,200);
  targets = new Target(350,200,200,200);
  mines = new Mines(150, 305, 300, 170);


}

function draw() {
  background(255,255,255);  
  drawSprites();
}