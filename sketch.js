var gameState=0;
var database
var playerCount
var form
var game 
var player
function setup(){
    database=firebase.database()
    createCanvas(500,500);
    game=new Game()
    game.getState()
    game.start()
    

}

function draw(){
    background("white");
   
 
    }


