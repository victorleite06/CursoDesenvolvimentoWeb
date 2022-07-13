const modulaA = require('../../moduloA')
console.log(modulaA.ola)

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
const { copyFileSync } = require('fs')
http.createServer((req, res) => {
    res.write('Boa dia')
    res.end()
}).listen(8080)