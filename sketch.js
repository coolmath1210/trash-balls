const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var left, right;

function preload(){
	
}

function setup() {
	createCanvas(900, 900);

	var ball_option={
		isStatic:false,
		resitution:0.3,
		friction:0,
		density:1.2,
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball=Bodies.circle(100,200,10,ball_option);
  	World.add(world,ball);

	ground =new Ground(200,800,2000,20);
  	right = new Ground(800,790,20,130);
  	left = new Ground(600,790,20,130)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);

  background(51);

  ground.show();
  left.show();
  right.show();

  ellipse(ball.position.x, ball.position.y, 10);


  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:1,y:0});
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.1});
	}	
}

