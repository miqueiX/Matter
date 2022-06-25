
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var chao
var parede1
var parede2
var bola



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;


	chao = Bodies.rectangle(400,680,800,20,{isStatic:true})
	World.add(world, chao)


	parede1 = Bodies.rectangle(700,620,15,100,{isStatic:true})
	World.add(world, parede1)

	parede2 = Bodies.rectangle(600,620,15,100,{isStatic:true})
	World.add(world, parede2)


	bola = Bodies.circle(20,600,14)
	World.add(world,bola)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  
	rect(chao.position.x,chao.position.y,800,20)

	rect(parede1.position.x,parede1.position.y, 15,100)

	rect(parede2.position.x,parede2.position.y, 15,100)

	ellipse(bola.position.x,bola.position.y, 14)


  drawSprites();
 
}

function keyPressed(){
if(keyCode === 32){
Matter.Body.applyForce(bola,{x:0,y:0},{x:0.02,y:-0.03})
}


}

