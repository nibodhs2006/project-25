
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,dustbin,ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
 
ground=new Ground(width/2,690,1000,10)

	dustbin1=new Dustbin(650,680,250,20)	
	dustbin2=new Dustbin(530,600,20,180)	
	dustbin3=new Dustbin(780,600,20,180)

	paper=new Paper(10,670,40)
	Engine.run(engine);
	
}


function draw() {
  background("white");
  rectMode(CENTER);

 dustbin1.display()
 dustbin2.display()
 dustbin3.display()
 ground.display()
 paper.display()
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:-75})
	   
	 }
}