function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  stand1 = new Ground(600,200,250,5)
  stand = new Ground(380,280,300,5)

  blocks1 = new Box(300,275,30,40)
  blocks2 = new Box(330,275,30,40)
  blocks3 = new Box(360,275,30,40)
  blocks4 = new Box(390,275,30,40)
  blocks5 = new Box(420,275,30,40)

  blocks6 = new Box(450,275,30,40)
  blocks7 = new Box(480,275,30,40)
  blocks8 = new Box(480,275,30,40)

  blocks9 = new Box(480,275,30,40)

  block1 = new Box(300,275,30,40)
  block2 = new Box(330,275,30,40)
  block3 = new Box(360,275,30,40)
  block4 = new Box(390,275,30,40)
  block5 = new Box(420,275,30,40)
  block6 = new Box(450,275,30,40)
  block7 = new Box(480,275,30,40)
  
  block8 = new Box(330,235,30,40)
  block9 = new Box(360,235,30,40)
  block10 = new Box(390,235,30,40)
  block11 = new Box(420,235,30,40)
  block12 = new Box(450,235,30,40)

  block13 = new Box(360,195,30,40)
  block14 = new Box(390,195,30,40)
  block15 = new Box(420,195,30,40)
  
  block16 = new Box(390,155,30,40)
  

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new Chain(this.polygon, {x:100,y:200})
}

function draw() {
  background(255,255,255);  

  stand1.display()
  stand.display()

  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  
  
  
  drawSprites();
}

function mouseDragged() 
{
    Matter.Body.setPosition(this.polygon.body, {x:mouseX,y:mouseY})
}

function mouseReleased() 
{
    slingShot.fly();
}