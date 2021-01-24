
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Roof1,bobObject1,rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Roof1 = new roof(400,100,600,50)

	bobObject1 = new bob(400,500,100,100);
	bobObject2 = new bob(300,500,100,100);
	bobObject3 = new bob(500,500,100,100);
	bobObject4 = new bob(600,500,100,100);
	bobObject5 = new bob(200,500,100,100);

	rope1 = new rope(bobObject1.body,Roof1.body, 2,0);
	rope2 = new rope(bobObject2.body,Roof1.body, -100,0);
	rope3 = new rope(bobObject3.body,Roof1.body, 100,0);
	rope4 = new rope(bobObject4.body,Roof1.body, 200,0);
    rope5 = new rope(bobObject5.body,Roof1.body, -200,0);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  

	Roof1.display();
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	if(keyDown("UP_ARROW")){

		Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:-40,y:-40});
		
		   }



  drawSprites();
 
}



