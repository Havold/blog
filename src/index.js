const express = require('express')
const path = require('path')
const morgan = require('morgan')
const hbs = require('express-handlebars')
// const e = require('express')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

//HTTP logger
// app.use(morgan('combined'))

//Template engine
app.engine('hbs', hbs.engine({ extname: '.hbs' }))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

const port = 3000

const route = require('./routes')
const db = require('./config/db')

// Connect to DB
db.connect()

// Routes init
route(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
