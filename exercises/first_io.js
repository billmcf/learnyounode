const fs = require('fs')

//console.log('in first io');
fs.readFileSync(process.argv[2], 'utf8', (err, data) => {
  if (err) {
    console.log(err)
  }
  console.log(data.split('\n').length - 1);
  })
