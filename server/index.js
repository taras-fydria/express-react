// require('dotenv').config()
const path = require('path')
const express = require('express')
const PORT = process.env.PORT || 5050
// const db = require('./server/db')

const app = express()
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'public', 'index.html'));
});

// const start = async () => {
//   try {
//     await db.authenticate()
//     await db.sync()
//     app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))
//   } catch (e) {
//     console.error(e)
//   }
// }
//
// start()
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))
