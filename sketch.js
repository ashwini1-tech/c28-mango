
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground,tree,treeImg;
var boy,boyImg;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12
var stones,attatch;
function preload()
{
	//treeImg=loadImage("tree.png")
	boyImg=loadImage("Plucking mangoes/boy.png")
}
function setup() {
	createCanvas(1300,600);


	engine = Engine.create();
	world = engine.world;
	ground=new Ground(width/2,600,width,20)
	stones=new Stone(235,420,30)
	mango1=new Mango(1100,100,30)
	mango2=new Mango(1170,130,30)
	mango3=new Mango(1010,140,30)
	mango4=new Mango(1000,70,30)
	mango5=new Mango(1100,70,30)
	mango6=new Mango(1000,230,30)
	mango7=new Mango(900,230,25)
	mango8=new Mango(1140,150,25)
	mango9=new Mango(1100,230,25)
	mango10=new Mango(1200,200,25)
	 mango11=new Mango(1120,50,25)
	 mango12=new Mango(900,160,25)
	attatch=new Throw(stones.body,{x:235,y:420})
	tree=new Tree(1050,580)






	Engine.run(engine);
  
}
function draw() {
	rectMode(CENTER);
	background("black");
	textSize(25)
text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY",50,50)
image(boyImg,200,340,200,300)
	
	
   stones.display()
   ground.display()
   mango1.display()
   mango2.display()
   mango3.display()
   mango4.display()
   mango5.display()
   mango6.display()
   mango7.display()
   mango8.display()
   mango9.display()
   mango10.display()
   mango11.display()
   mango12.display()
   tree.display();
   attatch.display();
   detectCollision(stones,mango1);
	detectCollision(stones,mango2);
	detectCollision(stones,mango3);
	detectCollision(stones,mango4);
	detectCollision(stones,mango5);
	detectCollision(stones,mango6);
	detectCollision(stones,mango7);
	detectCollision(stones,mango8);
	detectCollision(stones,mango9);
	detectCollision(stones,mango10);
	detectCollision(stones,mango11);
	detectCollision(stones,mango12);
  
  }
  
  function mouseDragged(){
    Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	attatch.fly()
	}
	function detectCollision(Lstones,Lmango){
var Mpos=Lmango.body.position
var Spos=Lstones.body.position
var distance=dist(Spos.x,Spos.y,Mpos.x,Mpos.y)
	if(distance<=Lmango.r+Lstones.r){
		Matter.Body.setStatic(Lmango.body,false)
	}
	

	}
  function keyPressed(){
	  if(keyCode===32){
		  Matter.body.setPosition(stones.body,{x:235,y:420})
		  attatch.Launch(stones.body)
	  }
  }
  

