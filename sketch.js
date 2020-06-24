const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var backgroundImg;
var slingShot;
var polygon_img;
var bg = "bg1.png";
var score = 0;

function preload(){
  polygon_img=loadImage("polygon.png");
  getBackgroundImg();
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(290,300,270,10);
  stand2 = new Stand(700,240,210,10);
 
  //set for first stand
  //bottom layer
  
  newBlock2 = new Block(170,275,30,40);
  newBlock3 = new Block(200,275,30,40);
  block1 = new Block(230,275,30,40);
  block2 = new Block(260,275,30,40);
  block3 = new Block(290,275,30,40);
  block4 = new Block(320,275,30,40);
  block5 = new Block(350,275,30,40);
  block6 = new Block(380,275,30,40);
  newBlock1 = new Block(410,275,30,40);
  

  //layer second
  newBlock6 = new Block(200,235,30,40);
  newBlock7 = new Block(230,235,30,40);
  block8 = new Block(260,235,30,40);
  block9 = new Block(290,235,30,40);
  block10 = new Block(320,235,30,40);
  block11 = new Block(350,235,30,40);
  newBlock5 = new Block(380,235,30,40);

  //layer third
  newBlock8 = new Block(230,195,30,40);
  newBlock9 = new Block(260,195,30,40);
  newBlock10 = new Block(290,195,30,40);
  newBlock11 = new Block(320,195,30,40);
  block13 = new Block(350,195,30,40);
 
  //layer fourth
  block16 = new Block(260,155,30,40);
  newBlock12 = new Block(290,155,30,40);
  newBlock13 = new Block(320,155,30,40);

  //top layer
  block17 = new Block(290,115,30,40);

  //set 2 for second stand
  //bottom layer
  newBlocks1 = new Block(610,215,30,40);
  blocks1 = new Block(640,215,30,40);
  blocks2 = new Block(670,215,30,40);
  blocks3 = new Block(700,215,30,40);
  blocks4 = new Block(730,215,30,40);
  blocks5 = new Block(760,215,30,40);
  newBlocks2 = new Block(790,215,30,40);
  //layer second
  newBlocks3 = new Block(640,175,30,40);
  blocks6 = new Block(670,175,30,40);
  blocks7 = new Block(700,175,30,40);
  blocks8 = new Block(730,175,30,40);
  newBlocks4 = new Block(760,175,30,40);
  //layer third
  newBlocks5 = new Block(670,145,30,40);
  blocks9 = new Block(700,145,30,40);
  newBlocks6 = new Block(730,145,30,40);

  //top layer
  newBlocks7 = new Block(700,105,30,40);


  //ball holder with slings
  ball = Bodies.circle(100,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(25)
        fill("red")
        text("Score  " + score,760, 75) 
  textSize(20);
  fill("blue");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("coral");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  newBlock1.display();
  newBlock2.display();
  newBlock3.display();
  fill("turquoise");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  newBlock5.display();
  newBlock6.display();
  newBlock7.display();
  fill("lime");
  block13.display();
  newBlock8.display();
  newBlock9.display();
  newBlock10.display();
  newBlock11.display();
  fill("yellow");
  block16.display();
  newBlock12.display();
  newBlock13.display();
  fill("skyblue");
  block17.display();
  fill("orange");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  newBlocks1.display();
  newBlocks2.display();
  fill("pink");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  newBlocks3.display();
  newBlocks4.display();
  fill("aqua")
  blocks9.display();
  newBlocks5.display();
  newBlocks6.display();
  fill("red")
  newBlocks7.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  newBlock1.score();
  newBlock2.score();
  newBlock3.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  newBlock5.score();
  newBlock6.score();
  newBlock7.score();
  block13.score();
  newBlock8.score();
  newBlock9.score();
  newBlock10.score();
  newBlock11.score();
  block16.score();
  newBlock12.score();
  newBlock13.score();
  block17.score();
  blocks1.score();
  blocks2.score();
  blocks3.score();
  blocks4.score();
  blocks5.score();
  newBlocks1.score();
  newBlocks2.score();
  blocks6.score();
  blocks7.score();
  blocks8.score();
  newBlocks3.score();
  newBlocks4.score();
  blocks9.score();
  newBlocks5.score();
  newBlocks6.score();
  newBlocks7.score();

}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
     slingShot.attach(this.ball);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=6 && hour<=18){
      bg = "bg1.png";
  }
  else{
      bg = "bg2.png";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}