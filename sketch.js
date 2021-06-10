
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
var canvas=		createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;


	
	ball1=new Ball(100,600,10)
	ground1=new Ground(400,680,800,20)
	dustbin1=new Dustbin(550,620,20,100)
	dustbin2=new Dustbin(610,660,100,20)
	dustbin3=new Dustbin(670,620,20,100)


	//Create the Bodies Here.

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
  ball1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

    
    ground1.display();
	

  
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:15,y:-15	})
	   
	 }
   
   }



