const fs = require("fs")

const inputFileName = "opgave.txt"

let content = fs.readFileSync(inputFileName).toString()

console.log("Indhold:", content)

let lines = content.split("\n").map(l => l.trim());

console.log("Line count:", lines.length)
console.log("Contents: ", lines)

let a = Number("64)")
let b = Number("77")
let c = a + b
console.log(c)