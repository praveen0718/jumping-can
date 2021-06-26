var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    ball = createSprite(random(20,750),80,50,50);
    ball.shapeColor = "white";
    ball.velocityY = 5;
    ball.velocityX = 3;

    
    edge1 = createSprite(800,300,10,600);
    edge1.visible = false;

    edge2 = createSprite(0,300,10,600);
    edge2.visible = false;

    edge3 = createSprite(400,0,800,10);
    edge3.visible = false;

    edge4 = createSprite(400,600,800,10);
    edge4.visible = false;

    box1 = createSprite(100,550,190,20);
    box1.shapeColor = "blue";

    box2 = createSprite(300,550,190,20);
    box2.shapeColor = "orange";

    box3 = createSprite(500,550,190,20);
    box3.shapeColor = "yellow";

    box4 = createSprite(700,550,190,20);
    box4.shapeColor = "pink";

    //create box sprite and give velocity

   

}

function draw() {
    background(rgb(100,100,169));
    //createedgeSprite
    

    
  
    //add condition to check if box touching surface and make it box
    if(ball.isTouching(box4)){

   ball.shapeColor = "pink";

   
     

    }

    if(ball.isTouching(box3)){

        ball.shapeColor = "yellow";
        
        music.play();
        
         }

         if(ball.isTouching(box2)){

            ball.shapeColor = "orange";
         
             }

             if(ball.isTouching(box1)){

                ball.shapeColor = "blue";

               //ball.velocityX = 5;
               //ball.velocityY = 3;

               music.stop()
             
                 }
             


   BounceBack();
  
    drawSprites();

   

   

    
}

function BounceBack(){

    ball.bounceOff(edge1);
    ball.bounceOff(edge2);
    ball.bounceOff(edge3);
    ball.bounceOff(edge4);
    ball.bounceOff(box1);
    ball.bounceOff(box2);
    ball.bounceOff(box3);
    ball.bounceOff(box4);
    

}
