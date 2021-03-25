var bg, bgImg;
var cat, catImg1, catImg2, catImg3;
var mouse, museImg1, museImg2, museImg3;

function preload() {

bgImg = loadImage("garden.png");

catImg1 = loadImage("cat1.png");
catImg2 = loadAnimation("cat2.png","cat3.png");
catImg3 = loadImage("cat4.png");

mouseImg1 = loadImage("mouse1.png");
mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
mouseImg3 = loadImage("mouse4.png");
}

function setup(){
    createCanvas(980,650);

    bg = createSprite(490,325,10,10);
    bg.addImage("backdrop",bgImg);

    cat = createSprite(800,550,10,10);
    cat.addAnimation("sleeping",catImg1);
    cat.scale = 0.1;
    cat.debug = true;

    mouse = createSprite(150,540,10,10);
    mouse.addAnimation("stand",mouseImg2);
    mouse.scale = 0.1;
    mouse.debug = true;
}

function draw() {

  if (cat.x - mouse.x < (cat.width - mouse.width)/2){
       cat.changeAnimation("sleeping",catImg1);
       cat.velocityX = 0;
       mouse.addAnimation("gifting",mouseImg1);
       mouse.changeAnimation("gifting",mouseImg1);
   }

  keyPressed()  
  drawSprites();
}

function keyPressed(){
    if (keyDown(LEFT_ARROW)){
        cat.addAnimation("walk",catImg2);
        cat.changeAnimation("walk",catImg2);
        cat.velocityX = -3;
        mouse.changeAnimation("stand",mouseImg2)
    }

    if (keyDown(DOWN_ARROW)){
        cat.addAnimation("sit",catImg3);
        cat.changeAnimation("sit",catImg3);
        cat.velocityX = 0;
        mouse.addAnimation("detected",mouseImg3);
        mouse.changeAnimation("detected",mouseImg3);
    }
}