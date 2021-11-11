let myFillColor = "black"
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed == true)
    line(pmouseX, pmouseY, mouseX, mouseY)
  strokeWeight(10)
  if (mouseY > windowHeight / 2) {
    stroke(255, 0, 102)
  } else {
    stroke(64, 0, 255)
  }
}
