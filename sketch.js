const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800,700);

  engine = Engine.create();
	world = engine.world; 
  Engine.run(engine);

  paper = new Paper(100,520, 40);
  dustbin = new Dustbin(500,650);
  ground = new Ground(600,height,1200,20);
  
}


function draw() {
  background("pink");
  rectMode(CENTER);

  dustbin.display();
  ground.display();
  paper.display();
  
  drawSprites();
 
}


function keyPressed() 
{ if (keyCode === UP_ARROW) 
  { Matter.Body.applyForce(paper.body,paper.body.position,
    {x:50,y:-50}); 
  }
}





