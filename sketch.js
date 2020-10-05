const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var box1,box2,box3
var box4,box5,box6,box7,box8,box9
var box10,box11,box20,box21,box22,box12,box13,box14,box15,box16,box17,box18,box19,ground;
var box23, box24,box25,box26,box27,box28,box29
var box30,box31,box33,box32,box34,box35,box36,box37,box38,box39,box40,box41,box42;
var polygon,slingshot,ground3,sCheck;
var a = 800; 
var b = 330;
var c = 600;
var polygon_img;
var score = 0;
var bgColor;
function preload(){
  polygon_img = loadImage("Hexagon2.png")
}
function setup() {
  createCanvas(1200,800);
 
engine =Engine.create();
world = engine.world;
box1 = new Box(75+a,300,50,50);
box2 = new Box(125+a,300,50,50);
box3 = new Box(175+a,300,50,50);
box4 = new Box(225+a,300,50,50);
box5 = new Box(275+a,300,50,50);
box6 = new Box(325+a,300,50,50);
box7 = new Box(150+a,250,50,50);
box8 = new Box(200+a,250,50,50);
box9 = new Box(250+a,250,50,50);
box10 = new Box(300+a,250,50,50);
box11 = new Box(175+a,200,50,50);
box12 = new Box(225+a,200,50,50);
box13= new Box(100+a,250,50,50);
box14 = new Box(125+a,200,50,50);
box15 =new Box(275+a,200,50,50);
box16 = new Box(150+a,150,50,50);
box17 = new Box(200+a,150,50,50);
box18 = new Box(250+a,150,50,50);
box19 = new Box(175+a,100,50,50);
box20 = new Box(225+a,100,50,50);
box21 = new Box(200+a,50,50,50);
ground = new Ground(1000,335,320,20);
ground2 = new Ground(800,650,320,20);
box22 = new Box(75+c,300+b,50,50);
box23= new Box(125+c,300+b,50,50);
box24 = new Box(175+c,300+b,50,50);
box25 = new Box(225+c,300+b,50,50);
box26= new Box(275+c,300+b,50,50);
box27= new Box(325+c,300+b,50,50);
box28= new Box(150+c,250+b,50,50);
box29 = new Box(200+c,250+b,50,50);
box30 = new Box(250+c,250+b,50,50);
box31 = new Box(300+c,250+b,50,50);
box32 = new Box(175+c,200+b,50,50);
box33 = new Box(225+c,200+b,50,50);
box34= new Box(100+c,250+b,50,50);
box35 = new Box(125+c,200+b,50,50);
box36 =new Box(275+c,200+b,50,50);
box37 = new Box(150+c,150+b,50,50);
box38 = new Box(200+c,150+b,50,50);
box39 = new Box(250+c,150+b,50,50);
box40 = new Box(175+c,100+b,50,50);
box41 = new Box(225+c,100+b,50,50);
box42 = new Box(200+c,50+b,50,50);
ground3 = new Ground(600,790,1200,20);
sCheck = "tied";

var polygon_options={
  restitution:0.2,
  density:1.3,
  friction:1
}
polygon = Bodies.rectangle(200,500,50,50,polygon_options);
World.add(world,polygon);
slingshot = new SlingShot(this.polygon,{x:300,y:400});
}

function draw() {
  getBgColor();
  if(bgColor){
  background(bgColor);
  }else{
    background(255);
  }
  Engine.update(engine);
  fill(255);
  textSize(20);
  text("Drag and realease the hexagon to destroy the tower.",10,30);
  text("Press space to get a second chance to play.",10,60);
  text("Press a and b to adjust the position of the string(moving up through a and down through b.)",10,90);

  box1.display("pink");
box2.display("green");
box3.display("lightblue");
box4.display("lightblue");
box5.display("lightblue");
box9.display("pink");
box6.display("lightblue");
box7.display("pink");
box8.display("lightblue");
box15.display("pink");
box10.display("lightblue");
box11.display("pink");
box12.display("green");
box13.display("lightblue");
box14.display("lightblue");
box15.display("green");
ground.display();
box16.display("lightblue");
box17.display("lightblue");
box18.display("lightblue");
box19.display("green");
box20.display("lightblue");
box21.display("lightblue");
box22.display("pink");
box23.display("green");
box27.display("lightblue");
box24.display("pink");
box25.display("green");
box26.display("lightblue");
box28.display("pink");
box29.display("green");
box30.display("pink");
box31.display("lightblue");
box32.display("lightblue");
box33.display("pink");
box34.display("lightblue");
box35.display("pink");
box36.display("lightblue");
box37.display("lightblue");
box38.display("pink");
box39.display("green");
box40.display("lightblue");
box42.display("pink");
box41.display("pink");
ground2.display();
slingshot.display();
noStroke();
ground3.display();
//box1.debug = true;
box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();
box11.score();
box12.score();
box13.score();
box14.score();
box15.score();
box16.score();
box17.score();
box18.score();
box19.score();
box20.score();
box21.score();
box22.score();
box23.score();
box24.score();
box25.score();
box26.score();
box27.score();
box28.score();
box29.score();
box30.score();
box31.score();
box32.score();
box33.score();
box34.score();
box35.score();
box36.score();
box37.score();
box38.score();
box39.score();
box40.score();
box41.score();
box42.score();

text("Score:"+score,750,40);


console.log(score);

keyPressed2();
keyPressed3();
imageMode (CENTER);
image(polygon_img,polygon.position.x,polygon.position.y,50,50);
}
function mouseDragged(){
 if(sCheck ==="tied"){
Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}
}
function mouseReleased(){
  slingshot.fly();
  sCheck = "untied";
 
}
function keyPressed(){
  
  if (keyCode===32){
    Matter.Body.setPosition(polygon,{x:200,y:slingshot.pointB.y})
         slingshot.attach(this.polygon);
         sCheck = "tied";
 }

}
function keyPressed2(){
  if(keyCode===97&&slingshot.pointB.y>100){
    slingshot.pointB.y = slingshot.pointB.y -10;
  }
}
function keyPressed3(){
  if(keyCode===98&&slingshot.pointB.y<750){
    slingshot.pointB.y = slingshot.pointB.y +10;
  }
}
async function getBgColor(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
 var responseJSON = await response.json();
 var datetime = responseJSON.datetime ;
 var hour = datetime.slice(11,13);
if(hour>6&&hour<=18){
  bgColor = color(112,88,88);
}else{
  bgColor = color(56,44,44);
}
   
} 