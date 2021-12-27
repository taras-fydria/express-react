if(process.env.NODE_ENV !== 'production') require('dotenv').config()

const path = require('path')
const express = require('express')
const PORT = process.env.PORT || 5050
const db = require('./sequelize')
const router = require('./routes/routes')

const app = express()

app.use(express.json())
app.use('/api', router)
app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'dist', 'index.html'));
});


const start = async () => {
  try {
    await db.authenticate()
    await db.sync({alter: true})
    app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))
  } catch (e) {
    console.error(e)
  }
}

start()
// app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))
