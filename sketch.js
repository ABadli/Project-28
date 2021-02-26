
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint  = Matter.Constraint;
 
var tree;
var ground;
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10;

var boy;
var stone,sling;


function preload()
{
	boy=loadImage("boy.png");
}

function setup() {
	createCanvas(displayWidth, displayHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	

	tree = new Tree(displayWidth-350,displayHeight-350);
	ground = new Ground(displayWidth/2, displayHeight-10, displayWidth, 20);

	m1 = new Mango(displayWidth-350,displayHeight-400,40);
	m2 = new Mango(displayWidth-310,displayHeight-510,40);
	m3 = new Mango(displayWidth-250,displayHeight-450,30);
	m4 = new Mango(displayWidth-450,displayHeight-550,40);

	m5 = new Mango(displayWidth-450,displayHeight-400,30);
	m6 = new Mango(displayWidth-300,displayHeight-600,40);
	m7 = new Mango(displayWidth-250,displayHeight-580,40);
	m8 = new Mango(displayWidth-230,displayHeight-530,30);
	m9 = new Mango(displayWidth-475,displayHeight-450,30);
	m10 = new Mango(displayWidth-380,displayHeight-500,40);

	//boy = new Boy(displayWidth-1000,displayHeight -120);
	console.log("Display:"+ displayWidth)
	stone = new Stone(displayWidth-1070,displayHeight-230,30);

	console.log("Stone obj"+stone.body);

	sling = new Sling(stone.body, {x:displayWidth-960,y:displayHeight-150});
	console.log("point sketch"+displayWidth-900);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  image(boy ,displayWidth-1000,displayHeight-230,200,300);

 // console.log("Draw");
  
  tree.display();

  ground.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  m10.display();
  stone.display();
  //boy.display();

  sling.display();
   detectollision(stone,m1);
  detectollision(stone,m2);
  detectollision(stone,m3);
  detectollision(stone,m4);
  detectollision(stone,m5);
  detectollision(stone,m6);
  detectollision(stone,m7);
  detectollision(stone,m8);
  detectollision(stone,m9);
  detectollision(stone,m10);
  
  //drawSprites();
 
}

function mouseDragged(){

	console.log("mouseDragged")
	Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
	sling.fly();
}

function detectollision(stone1,mango1){
	
  mangoBodyPosition=mango1.body.position
  stoneBodyPosition=stone1.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=mango1.r+stone1.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(mango1.body,false);
    }

  }

  function keyPressed(){
    if(keyCode === 32){
      Matter.Body.setPosition(stone.body, {x:displayWidth-1070, y:displayHeight-230});
      sling.attach(stone.body);
    }
  }

