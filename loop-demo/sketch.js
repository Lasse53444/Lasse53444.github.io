

function setup() {
  createCanvas(400, 500);
  text("Output is in console", 20, 20)

  console.log("Loop demo");

  console.log("while loop")

  let i = 10

  while (i > 0) {
    console.log(i);

    i -= 1
  }
  console.log("output opg 1");


  let xSum = 0
  for (let x = 1; x <= 20; x++) {
    xSum = xSum + x
  }
  console.log(xSum)

  console.log("output opg 2");
}

for(let i = 2; 1 <= 20; i+=2){
  console.log(i)
}