const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

function preload(){
    bgImg = loadImage("images/GamingBackground.png");
}


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground1 = new ground(600,590,width-50,30)
    
    box1 = new box(500,100,70,70);
    box2 = new box(500,100,70,70);
    box3 = new box(500,100,70,70);
    box4 = new box(500,100,70,70);
    box5 = new box(500,100,70,70);
    box6 = new box(500,100,70,70);

    box7 = new box(600,100,70,70);
    box8 = new box(600,100,70,70);
    box9 = new box(600,100,70,70);
    box10 = new box(600,100,70,70);
    box11 = new box(600,100,70,70);
    box12 = new box(600,100,70,70);

    box13 = new box(700,100,70,70);
    box14 = new box(700,100,70,70);
    box15 = new box(700,100,70,70);
    box16 = new box(700,100,70,70);
    box17 = new box(700,100,70,70);
    box18 = new box(700,100,70,70);

    wreckingBall = new ball(300,100,55)
    
    rope = new sling(wreckingBall.body, {x: 300,y: 50});

    monster1 = new monster(850,100,100);
}

function draw(){
    background(bgImg);
    Engine.update(engine);
    ground1.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    box7.display();
    box8.display();
    box9.display();;
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

    wreckingBall.display();

    rope.display();

    monster1.display();
 
}

function mouseDragged(){
    Matter.Body.setPosition(wreckingBall.body,{x: mouseX, y: mouseY});
}