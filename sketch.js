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
  text("Komet Zeitung", 500,100);
  fill(0,0,255);
  rect(0,0,width,50);
  image(k,0,50,300,300);
}

function between(x,y,x2,y2,x3,y3){
  return (x3 > x && x3 < x2 && y3 > y && y3 < y2); 
}
