var canvas;
var question;

function setup(){
  canvas = createCanvas(850,400);
  question = new Question(100,100);
}


function draw(){
  background("pink");
  question.display();
}
