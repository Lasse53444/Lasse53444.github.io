let myFillColor = 'black'

function setup() {
  createCanvas(windowWidth, windowHeight)
  rectMode(CENTER)
}

function draw() {
  background(220);
  let x = mouseX
  let y = mouseY
  let w = 80

  fill(myFillColor)
  if (keyIsPressed) {
    rect(x, y, w)
  } else {
    circle(x, y, w)
  }
}

function keyPressed() {
  console.log("pressed", key)
  if ('b' == key) {
    myFillColor = 'blue'
  }
  if ('r' == key) {
    myFillColor = 'red'
  }
}

function keyReleased() {
  console.log("released", key)
}

function mousePressed() {
  console.log("mouse pressed")
  myFillColor = 'black'
}