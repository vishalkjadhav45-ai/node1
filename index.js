const express = require('express')
const app = express()
const port = 0000

app.get('/', (req, res) => {
  res.send('<h1> they dont know me sonn </h1>')
})

app.listen(port,'0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})
