const readline = require('readline')
const rl = readline.createInterface(process.stdin, process.stdout)
const fs = require('fs')

rl.question('What do you want to write to the file? ', answer => {
  let filePath = 'test.txt'
  if (!fs.existsSync(filePath)) {
    fs.writeFile(filePath, answer, (err) => {
      if (err)
        throw err;
      console.log(`${filePath} was created and saved.`);
    });
  }
  else
    console.log(`File exists already.`);
})