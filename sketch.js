const Engine = Matter.Engine;
const World =Matter.World;
const Bodies=Matter.Bodies;
const Constraint= Matter.Constraint;

var engine ,world;
var ground,pendulum;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;

function setup() {
  createCanvas(1200,600);
  engine=Engine.create();
  world=engine.world;

  ground= new Ground(600,550,1200,30);

  box1 = new Box(200,440,70,70);
  box2 = new Box(300,460,70,70);
  box3 = new Box(360,460,70,70);
  box4 = new Box(330,400,70,70);
  box5 = new Box(320,460,70,70);
  box6 = new Box(400,440,70,70);
  box7 = new Box(480,400,70,70);
  box8 = new Box(430,420,70,70);
  box9 = new Box(470,400,70,70);
  box10 = new Box(400,400,70,70);
  


  pendulum =new Pendulum(200,200,"#00b0ff");

  sling = new Sling(pendulum.body,{x:200,y:100});  

 
 
}


function draw() {
  background("pink");
  Engine.update(engine);
  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  pendulum.display();
  sling.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(pendulum.body, {x: mouseX , y: mouseY})
}