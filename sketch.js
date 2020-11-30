const Engine=Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var box1, ground1;
var box2;

function setup()
 {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world;
  ground1=new Ground();
  box1=new Box(200,80,25,25);
  box2= new Box(190,100,25,25);
  
}

function draw() {
  background(255,255,255);
  Engine.update(engine);  
  box1.display();
  ground1.display();
  box2.display();
}
