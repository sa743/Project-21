var box;

var block1;

var block2;

var block3;

var block4;

var block5;

var edges;

var yesOkSound;

function preload(){

    yesOkSound = loadSound("Yes Ok!.mp3");
}

function setup(){

    createCanvas(1180,600);

    yesOkSound.loop();

    box = createSprite(1140, 400, 35, 35);
    box.shapeColor = "rgb(225, 150, 90)";
    box.velocityY = 6;
    box.velocityX = 4.9;

    block1 = createSprite(340, 585, 200, 30);
    block1.shapeColor = "blue";

    block2 = createSprite(580, 585, 200, 30);
    block2.shapeColor = "yellow";

    block3 = createSprite(107, 585, 200, 30);
    block3.shapeColor = "red";

    block4 = createSprite(1060, 585, 200, 30);
    block4.shapeColor = "green";

    block5 = createSprite(820, 585, 200, 30);
    block5.shapeColor = "orange";

}

function draw() {

    background(rgb(169,169,169));

    edges = createEdgeSprites();
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box

    if(block1.isTouching(box) && box.bounceOff(block1)){
       box.shapeColor = "blue";
    }

    if(block2.isTouching(box)){
        box.shapeColor = "yellow";
        box.velocityY = 0;
        box.velocityX = 0;
        yesOkSound.stop();
    }

    if(block3.isTouching(box) && box.bounceOff(block3)){
        box.shapeColor = "red";
    }

    if(block4.isTouching(box) && box.bounceOff(block4)){
        box.shapeColor = "green";
    }

    if(block5.isTouching(box) && box.bounceOff(block5)){
        box.shapeColor = "orange";
    }

    drawSprites();

}
