const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <form action="/info/get" method="GET">
      <input type="submit" value="GET">
    </form>
  </body>
  </html>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
