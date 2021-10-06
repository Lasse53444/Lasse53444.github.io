
function setup() {
  createCanvas(400, 400);
}

function draw() {
if (mouseX < 200 && mouseY > 200) {
fill("red");
} else {
  fill("white") 
} 
circle(mouseX, mouseY, 50);
}