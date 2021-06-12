var database, form, player, game, allPlayers, car1, car2, car3, car4, cars;
var gamestate = 0;
var playercount  
function setup(){
    createCanvas(displayWidth-200,displayHeight);
   database = firebase.database();
   game = new Game();
   game.getState();
   game.start();
   
}

function draw(){
    background("white");
    
    if(playercount === 4){
    game.update(1)
    }
    
    if(gamestate === 1){
    clear()
    game.play()
    }

}
