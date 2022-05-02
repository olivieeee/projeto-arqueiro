const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  var opcao={
 isStatic:true 

  }
playerBase=Bodies.rectangle(200,350,180,150,opcao)
World.add(world,playerBase)
playerArcher=Bodies.rectangle(250,200,50,180,opcao)
World.add(world, playerArcher)
  
  



}

function draw() {
  background(backgroundImg);
image(baseimage, playerBase.position.x,playerBase.position.y, 180, 150 )
image(playerimage, playerArcher.position.x,playerArcher.position.y,50,180)
  


  Engine.update(engine);

  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
