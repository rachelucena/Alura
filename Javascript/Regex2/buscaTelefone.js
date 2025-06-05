const fs = require('fs')
const bancoCsv = 'database1.csv'
const banco = fs.readFileSync(bancoCsv, "utf-8")

const patternCel = /\(\d{2}\)\s\d{5}-\d{4}/g

const match = banco.match(pattern)
console.log(match)