require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 5050
const db = require('./db')

const app = express()

const start = async () => {
  try {
    await db.authenticate()
    await db.sync()
    app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))
  } catch (e) {
    console.log(e.message)
  }
}

start()
