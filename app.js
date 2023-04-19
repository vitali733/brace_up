const express = require('express')
const app = express()
const port = 3000

//Mount require and mount router
const usersRouter = require('./usersRouter.js')
app.use('/users', usersRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
