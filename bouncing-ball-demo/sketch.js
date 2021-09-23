let xPos = 30;
let yPos = 200;
let xSpeed = 2;
let ySpeed = 2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if (xSpeed ==2) 
  fill("purple")

circle(xPos, yPos, 60);
  
yPos += ySpeed
xPos += xSpeed

if (xPos > 370)
 xSpeed = xSpeed * -1;

 if (xPos < 30)
 xSpeed = xSpeed +1;

 if (yPos > 370)
 ySpeed = ySpeed -1;

 if (yPos < 30)
 ySpeed = ySpeed +1;
}
