const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var scary;
var guy, background1;
var maxIllusion=1;
var illuisons=[];
var world,engine;
var ground1, grassland;
var gameState=0;
function preload(){
grassland=loadImage("grassland.jpg")
}
function setup(){

engine=Engine.create();
world=engine.world;

ground1= new ground(displayWidth/2,0,displayWidth,10);
ground1.visble=false;
    
createCanvas(1000,1000);
guy = new player(100,100);
guy.scale=0.1;

if(frameCount%200===0){
    for(var i=0;i<maxIllusion;i++){
       illuisons.push(new illuison(random(0,1000),random(0,1000)));
    }   
 }
}

function draw(){

Engine.update(engine);
background1=guy.x+100;
background1=guy.y+100;

edges=createEdgeSprites();
//guy.bounceOff(edges);

if(guy.x<background || guy.y<background){
    background1=background(grassland); 
}
else{
    background1=background(0);
}

if(keyDown(UP_ARROW)){
    velocityY=-3;
}
if(keyDown(DOWN_ARROW)){
    velocityY=3;
}
if(keyDown(RIGHT_ARROW)){
    velocityX=3;
}
if(keyDown(LEFT_ARROW)){
    velocityX=-3;
}
guy.display();
ground1.display();

for(var i=0;i<maxIllusion;i++){
    illuisons[i].showIlluison();
    illuisons[i].updateY();
 }

drawSprites();
}