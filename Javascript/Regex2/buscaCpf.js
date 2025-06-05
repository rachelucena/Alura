const fs = require('fs')
const bancoCsv = 'database1.csv'
const banco = fs.readFileSync(bancoCsv, "utf-8")

const patternCPF = /\d{3}[.-]?\d{3}[.-]?\d{3}[.-]?\d{2}/g

const match = banco.match(pattern)
console.log(match)