const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse
const MouseConstraint = Matter.MouseConstraint

var engine, world;
var box1, pig1;
var backgroundImg,platform, slingShot;
var bird1, bird2, bird3, Birds, removeBird;
var myMouse, mc;
var score;

function preload() {
    //nightCycle();
    backgroundImg = loadImage("sprites/bg.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    score = 0;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird1 = new Bird(200,70);
    bird2 = new Bird(150,100);
    bird3 = new Bird(100,100);
    Birds = [bird3, bird2, bird1]

    sling = new Sling(bird1.body,{x : 200, y : 70});

    myMouse = Mouse.create(canvas.elt);
    myMouse.pixelRatio = pixelDensity()
    var options = {
        mouse : myMouse
    };
    mc = MouseConstraint.create(engine, options);
    World.add(world, mc);
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);   
    }
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird1.display();
    bird2.display();
    bird3.display();
    platform.display();
    sling.display();    

    push()
    stroke("white")
    text(score, 1000, 40)
    pop()

    pig1.calcScore();
    pig3.calcScore();
}


function mouseReleased(){

    setTimeout(function(){
        if(removeBird){
         removeBird.route = []   
        }
        
        sling.fly()
       // World.remove(world, mc)
        removeBird = Birds.pop()    
    }, 100)
}

function keyPressed() {
    if (keyCode === 32) {
      sling.attach(Birds[Birds.length - 1].body)
    }
  }

//async function nightCycle() {
//    var response = await fetch("https://worldtimeapi.org/api/timezone/America/New_York")
//    var data = await response.json()
//    var dateTimeInfo = data.datetime
//    var hour = dateTimeInfo.slice(11, 13)
//    if(hour > 22 && hour > 3){
//        backgroundImg = loadImage("sprites/bg.png");
//    } else {
//        backgroundImg = loadImage("sprites/bg2.jpg");
//    }
//}