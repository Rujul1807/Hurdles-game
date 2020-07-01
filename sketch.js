var athlete;
var form;
var gameState=0;
var playerCount;
var track;
var distance=0;
var database;
var game;
var athlete1,athlete2,athlete3,athlete4;
var hurdles;
var gameend=createElement("h2");
function setup() {
  database = firebase.database();
    createCanvas(displayWidth - 20, displayHeight-30);
    form=new Frontform();
    athlete=new Player();
    hurdles=new Group();

  }
  
  function draw() {
    background(220);
 form.display();
 game.getState;
 if(athlete1.isTouching(hurdles)||athlete2.isTouching(hurdles)||athlete3.isTouching(hurdles)||athlete4.isTouching(hurdles)){
 athlete.velocityX=0;
 athlete.velocityY=0;   
gameend.html("you are out of the game");

}
if(playerCount===4){
game.update(); 
}
  }
 