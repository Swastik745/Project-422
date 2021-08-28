var spacecraft, hasDocked;
var  spacecraftImage1, spacecraft2,spacecraft3, spacecraft4, bg;
var iss,issImage;
var invisibleGround;
function preload() {
  issImage = loadImage("iss.png");
  spacecraftImage1 = loadImage("spacecraft1.png");
  spacecraft2 = loadImage("spacecraft2.png");
  spacecraft3 = loadImage("spacecraft3.png");
  spacecraft4 = loadImage("spacecraft4.png");
  bg = loadImage("spacebg.jpg");
}


function setup() {
 canvas = createCanvas(800,400);
  //background(bg);
  hasDocked = false;
 
  spacecraft = createSprite(500,300,0,0);
  spacecraft.addImage("normal",spacecraftImage1);
  spacecraft.scale = 0.2;

  iss = createSprite(500,100,0,0);
  iss.addImage("iss",issImage);
  iss.scale = 0.5;

  invisibleGround=createSprite(400,110,2000,5);
  invisibleGround.visible = false;

}

function draw() {
  background(bg);
  if(!hasDocked) {
    spacecraft.x += random(1,-1);
    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y -2;
    }
      
    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spacecraft3);
      spacecraft.x = spacecraft.x - 1;
    }
      
    if(keyDown("RIGHT_ARROW")){
        spacecraft.addImage(spacecraft4);
      spacecraft.x = spacecraft.x + 1;
    }
       
    if(keyDown("DOWN_ARROW")){
        spacecraft.addImage(spacecraft2);
    }

  }

  if(spacecraft.y <= (iss.y+80) && spacecraft.x <= (iss.x-9)){
    hasDocked = true;
    textSize(25);
    fill("green")
    text("Docking Successful!", 400, 300);

  }

 if(spacecraft.isTouching(invisibleGround)){

  hasDocked = true;
  textSize(25);
  fill("red")
  text("Docking UnSuccessful!", 400, 300);


 }
 
  textSize(30);
  fill("lightGreen")
  text(":Instruction:", 100, 70);
    
  textSize(15);
  fill("yellow")
  text("1.Click the [UP-ARROW] to move up the Spacecraft.", 10, 100);

  textSize(15);
  fill("yellow")
  text("2.Click the [RIGHT-ARROW] to move right the Spacecraft.", 10, 130);

  textSize(15);
  fill("yellow")
  text("3.Click the [LEFT-ARROW] to move left the Spacecraft.", 10, 160);

  drawSprites();
}
