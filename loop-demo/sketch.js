

function setup() {
  createCanvas(400, 500);
  text("Output is in console", 20, 20)

  console.log("Loop demo");

  console.log("while loop")

  let i = 10

  while (i > 0) {
    console.log("while demo" + i);

    i -= 1
  }
  console.log("output opg 1");

  for (let j = 1; j < 21; j += 1) {
    j += 1
  }
  console.log("output opg 2")
}