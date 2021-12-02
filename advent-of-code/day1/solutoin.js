const fs = require("fs")

const inputFileName = "opgave.txt"

let content = fs.readFileSync(inputFileName).toString()

console.log("Indhold:", content)