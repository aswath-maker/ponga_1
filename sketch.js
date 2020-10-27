var onlineGameState = 0;
var database , playerCount=0;

var game, player, form; 


function preload(){

backgroundImg = loadImage("img/background.png");

}




function setup() {
  createCanvas(windowWidth, windowHeight);

  database = firebase.database();
  
  game = new Game();
  game.readGameState();
  game.start();
  

/*
//creating back button
  back = createSprite(22 , 19 , 20 , 20)
  back.shapeColor = "blue";

  //creating start2 
  start2 = createSprite(width/2 , 330 , 100 , 20)
  start2.shapeColor = "blue";


   //creating start button
  start = createSprite(Width/2 , 355 , 100 , 20);
  start.shapeColor = "blue"; */
/*
  //creating user paddle
  rightPaddle = createSprite(width-30, 346, 10, 150);
  rightPaddle.visible = false;

  //computer paddle
  leftPaddle = createSprite(40,346,10, 150)
  leftPaddle.visible = false;
*/

  /*
  //top sprite
  topSprite = createSprite(0 , 10 , 100000000, 1);
  topSprite.visible = false;
  
  //down sprite
  downSprite = createSprite(0 , 780 , 100000000, 1);
  downSprite.visible = false;
  
  //ball
  ball = createSprite(displayWidth/2 , 355 , 20 ,20)
  ball.velocityX = 0;
  ball.velocityY = 0;
  ball.visible = false; 
  */
}

function draw() {
  
  

 //i wan't to keep a foot ball back ground but currently it is in white color. it is temprovary.
  background(backgroundImg);  

  /*
  //deafult gamestate.
  gamestate = sull;
  
  //when should gamestate 1 come.
if(mouseIsOver(start) && mouseIsPressed){
  gamestate = 1;
  start.shapeColor = "red";
}else{
start.shapeColor = "blue";
}

console.log(playerCount);
if(gamestate === 1){
  start.visible = false;
  start2.visible = false;
  compPaddle.visible = true;
  ball.visible = true;
  userPaddle.visible = true;
  ball.velocityX = 10;
  ball.velocityY = 3;
}

//console.log(gamestate);
//change of color but it dosen't work.
if(mouseIsOver(start2)){
  start2.shapeColor = "red";
}else{
  start2.shapeColor = "blue";
}
  
//when should gamestate 2 come.
if(mouseIsOver(start2) && mouseIsPressed){
  gamestate = 2;
  start2.shapeColor = "red";
}else{
start2.shapeColor = "blue";
}

//what should happen in gamestate 2.
if(gamestate === 2){
  back.visible = true;
  //textSize(20)
  //textFont("black");
 // text("this mode avalabile in next update." , 518 , 166);
  start2.visible = false;
  start.visible = false;
  form.showOrder();

}

if(mouseIsOver(back) && mouseIsPressed){
  gamestate = null;
}

if(mouseIsOver(back)){
back.shapeColor = "red";
}else{
back.shapeColor = "blue";
}

  if(gamestate === null){
    start.visible = true;
    start2.visible = true;
    back.visible = true;
    compPaddle.visible = false;
    ball.visible = false;
    userPaddle.visible = false;
    ball.velocityX = 0;
    ball.velocityY = 0;
  
  }


  
  if(gamestate !== 1){
    textFont("black")
    textSize(16);
    text("press to play" , 644 , 381)
  }


  

  play();
  mover()
  drawSprites();
  */

  // Online Mode--------------------------------------------------------------------------------------------

  form.showOrder();
  if(playerCount === 2){

    database.ref("/").update({
      gameState : 1
    })

      

  }







}

function play(){
  userPaddle.bounceOff(topSprite);
  userPaddle.bounceOff(downSprite);
  ball.bounceOff(userPaddle)
  ball.bounceOff(topSprite);
  ball.bounceOff(downSprite);
  ball.bounceOff(compPaddle);
  compPaddle.y = ball.y;
}

function mover(){
  if(keyDown(DOWN_ARROW)){
    userPaddle.y = userPaddle.y + 10;
  }

  if(keyDown(UP_ARROW)){
    userPaddle.y = userPaddle.y - 10;
  }

}
