const fs = require('fs')
fs.readFile('example.txt', 'utf8', (error, contents) => console.log(contents));