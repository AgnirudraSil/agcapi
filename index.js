const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const authRoutes = require('./routes/auth')
const genRoutes = require('./routes/generation')

app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    )
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

app.use((error, req, res, next) => {
    console.log(error)
    const status = error.statusCode || 500
    const message = error.message
    const data = error.data
    res.status(status).json({ message: message, data: data })
})

app.use('/auth', authRoutes)

app.use(genRoutes)

mongoose.connect(`mongodb+srv://agnirudra:${"7Bh8hcWRtVlLplTk"}@cluster0.qhrdt.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }).then(result => {
    app.listen(5000)
}).catch(err => {
    console.log(err)
})