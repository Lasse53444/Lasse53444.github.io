let xStart = 0
let yStart = 0
let xEnd = 0
let yEnd = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  strokeWeight(5)
}

function draw() {
  background(220);
  
  if(mouseIsPressed){
    xEnd = mouseX
    yEnd = mouseY
  }
  line(xStart, yStart, xEnd, yEnd)
}

function mousePressed() {
  xStart = mouseX
  yStart = mouseY
}