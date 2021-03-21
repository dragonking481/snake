var snake, fruit;
var backgroundImage
var fruitgroup
function preload(){
     backgroundImage = loadImage ("sprites/better.png")
     fruitImage = loadImage("sprites/apple.png")
}

function setup(){
   createCanvas(displayWidth-850, displayHeight-400)
   snake = createSprite (300,300,40,30);
   fruitgroup=new Group()
}

function draw(){
    background(backgroundImage);
    
    

    if(keyDown("up")){
        snake.velocityY=-4
    }
    if(keyDown("left")){
        snake.velocityX=-4
    }
    if(keyDown("right")){
        snake.velocityX=4
    }

    if(keyDown("down")){
        snake.velocityY=4
    }

if (snake.isTouching(fruitgroup)){
    fruitgroup.destroyEach();
    snake.width=snake.width+30
}
spawnFruit();
    drawSprites()
}   
function spawnFruit(){
    if (frameCount % 100 === 0) {
        var fruit = createSprite(600,120,40,10);
        fruit.y = Math.round(random(10,1200));
        fruit.addImage(fruitImage);
        fruit.scale = 0.22;
        
        
         //assign lifetime to the variable
        fruit.lifetime = 200;
        
        fruitgroup.add(fruit)
    }
}
