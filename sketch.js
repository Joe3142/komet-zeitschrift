let k;



function preload(){
  k = loadImage('pic/Zeitung-Komet.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}



function draw() {
  background(255);
  textSize(48);
  fill(0);
  text("Komet Zeitung", width/3, height/8);
  image(k,0,height/8 - 48,200,200);
  fill(0,0,255);
  noStroke();
  rect(0,0,width,height/8 - 48);
  fill(0,0,255);
  stroke(0);
  rect(0,0,width / 5,height/8 - 48);
  fill(0);
  textSize(40);
  text("Anmelden",0,height/8 - 48 - 10);
}

function between(x,y,x2,y2,x3,y3){
  return (x3 > x && x3 < x2 && y3 > y && y3 < y2); 
}