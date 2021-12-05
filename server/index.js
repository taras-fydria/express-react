require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 5050

const app = express()

app.get('/', (req, res)=>{
  res.send('Hello World')
})
app.listen(PORT, ()=>console.log(`Example app listening at http://localhost:${PORT}`))