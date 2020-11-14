const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;

function setup() {
  engine = Engine.create()
  world = engine.world;

  var canvas = createCanvas(800,400);

  stand1 = new Ground(610,203,200,5)
  stand = new Ground(390,283,250,5)

  blocks1 = new Box(550,180,30,40)
  blocks2 = new Box(580,180,30,40)
  blocks3 = new Box(610,180,30,40)
  blocks4 = new Box(640,180,30,40)
  blocks5 = new Box(670,180,30,40)

  blocks6 = new Box(580,140,30,40)
  blocks7 = new Box(610,140,30,40)
  blocks8 = new Box(640,140,30,40)

  blocks9 = new Box(610,100,30,40)

  block1 = new Box(300,260,30,40)
  block2 = new Box(330,260,30,40)
  block3 = new Box(360,260,30,40)
  block4 = new Box(390,260,30,40)
  block5 = new Box(420,260,30,40)
  block6 = new Box(450,260,30,40)
  block7 = new Box(480,260,30,40)
 
  block8 = new Box(330,220,30,40)
  block9 = new Box(360,220,30,40)
  block10 = new Box(390,220,30,40)
  block11 = new Box(420,220,30,40)
  block12 = new Box(450,220,30,40)

  block13 = new Box(360,180,30,40)
  block14 = new Box(390,180,30,40)
  block15 = new Box(420,180,30,40)
  
  block16 = new Box(390,140,30,40)
  

  polygon = Matter.Bodies.polygon(100,200,5,20)
  polygonimg=loadImage("Pentagon.png")
  World.add(world, polygon);

  slingShot = new Chain(polygon, {x:100,y:200})
}

function draw() {
  background(40,40,40);  

  stand1.display()
  stand.display()

  fill("blue")
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display() 
  block6.display()
  block7.display()

  fill("gold")
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()

  fill("lightblue")
  block13.display()
  block14.display()
  block15.display()

  fill("red")
  block16.display()

  fill("blue")
  blocks1.display()
  blocks2.display()
  blocks3.display()
  blocks4.display()
  blocks5.display()

  fill("gold")
  blocks6.display()
  blocks7.display()
  blocks8.display()

  fill("lightblue")
  blocks9.display()
  
  //ellipseMode(RADIUS)
  //ellipse(polygon.position.x,polygon.position.y,20,20)
  imageMode(CENTER)
  image(polygonimg,polygon.position.x,polygon.position.y,50,50)

  slingShot.display()

  drawSprites();
}

function mouseDragged() 
{
    Matter.Body.setPosition(polygon, {x:mouseX,y:mouseY})
}

function mouseReleased() 
{
    slingShot.fly();
}
