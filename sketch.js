var cat,catimg1,cat_walking,cat_standing
var mouse,mouseimg1,mouse_walking,mouse_standing
var stage,stageImg
var gamestate = "play"
function preload() {
   catimg1 = loadImage("images/cat1.png")

   cat_walking = loadAnimation("images/cat2.png","images/cat3.png")

   cat_standing = loadImage("images/cat4.png")

   mouseimg1 = loadImage("images/mouse1.png")

   mouse_walking = loadAnimation("images/mouse2.png","images/mouse3.png")

   mouse_standing = loadImage("images/mouse4.png")
   
   stageImg = loadImage("images/garden.png") 
}
function setup(){
    createCanvas(2000,1000)
    stage = createSprite(500,100,10,10)
    stage.addImage(stageImg)
    stage.scale = 1.5

    cat = createSprite(800,530,10,10)
    cat.addAnimation("walking_cat",cat_walking)
    cat.scale = 0.15

    mouse = createSprite(300,530,100,100)
    mouse.addAnimation("walking_mouse",mouse_walking)
    mouse.scale = 0.1
    mouse.setCollider("rectangle",0,0,1000,1000)
}

function draw() {
    cat.velocityX = 0
    if(gamestate === "play"){
        if(keyDown("left")){
            keyPressed();
        }
        if(cat.x - mouse.x < (cat.width - mouse.width)/2){
            gamestate = "end"
        }
        drawSprites();
    }
    if(gamestate === "end"){
        cat.addImage(cat_standing)
        mouse.addImage(mouse_standing)
        stroke("black")
        textSize(25)
        text("press R restart",400,200)
        if(keyDown("r")){
            cat.x = 800
            gamestate = "play"
        }
    }
}
function keyPressed(){
    cat.velocityX =  -5
    
}
