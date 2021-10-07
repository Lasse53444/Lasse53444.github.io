

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

  //få j til at ændre sig i en løkke og brug den som variabel til j
  let j = 0
  let n = 0
  let answer = n + j
  while (j > 0) {
    console.log("while demo" + j);

    j += 1

  }
  console.log("output opg 2");
}