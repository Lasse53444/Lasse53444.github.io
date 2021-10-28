//let value = Math.floor(Math.random() * 6) + 1

let arr = []
for (let o = 1; o <= 100; o++) {

    let xSum = 0
    for (let i = 0; i < 6; i++) {
        let value = Math.floor(Math.random() * 6) + 1
        xSum = xSum + value
        //console.log(value)
    }
    console.log('sum =', xSum)
}