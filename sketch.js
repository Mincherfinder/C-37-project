var canvas;
var database;
var myGameState;
var myContestantCount;
function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database;
  quiz = new Quiz()
  quiz.getState()
  quiz.start()
}



function draw(){
  background("pink");

  
}
