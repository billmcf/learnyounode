const fs = require('fs')
const path = require('path')

const dir = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(dir, 'utf8', (err, data) => {
  if (err) {
    console.log(err)
  }
  for (i=0; i<data.length;i++){
      if (path.extname(data[i]) === ext){
          console.log(data[i])
      }
  }
  })
