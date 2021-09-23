let xPos = 40;
let yPos = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  
circle(xPos, yPos, 60);
  
xPos += 1;

if (xPos == 360)
 xPos -=320
}
