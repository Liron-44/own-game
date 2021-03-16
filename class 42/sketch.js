var peopleWithMask, peopleWithoutMask, player, ground;


function setup(){
    createCanvas(1200, 600);
    peopleWithMask = createSprite(200, 200, 30, 30);
    peopleWithoutMask = createSprite(300, 300, 30, 30);
    player = createSprite(400, 400, 30, 30)
    ground = createSprite(400, 400, 1600, 10)

    ground.velocityX = -3
    ground.x = ground.width/2
    peopleWithMask.shapeColor=("green");
    peopleWithoutMask.shapeColor = ("red")
    ground.shapeColor = ("black")
}
function draw(){
    background("lightblue")
if(ground.x<0){
    ground.x = 1000
}
    drawSprites();
}