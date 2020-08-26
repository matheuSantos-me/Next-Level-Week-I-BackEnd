import express from 'express'

const app = express()
app.get('/users', (req, res) => {
  res.send('OIOIOIOIOIOI')
})

app.listen(3333)