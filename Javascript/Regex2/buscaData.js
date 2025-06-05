const fs = require('fs')
const bancoCsv = 'database1.csv'
const banco = fs.readFileSync(bancoCsv, "utf-8")

const patternData = /\d{2}[./ ]?\d{2}[./ ]?\d{4}$/gm

const match = banco.match(pattern)
console.log(match)