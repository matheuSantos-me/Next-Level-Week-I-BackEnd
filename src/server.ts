import express from 'express'
import path from 'path'
import Routes from './routes'

const app = express()
app.use(express.json())
app.use(Routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(3333)