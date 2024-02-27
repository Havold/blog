const express = require('express')
const path = require('path')
const methodOverride = require('method-override')
const morgan = require('morgan')
const hbs = require('express-handlebars')
// const e = require('express')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

// Đối với phương thức POST, thì do express chưa tích hợp middleware để xử lý POST từ form method lên, thế
//nên khi ta dùng console.log(req.body); -> undifined
//=> Giải pháp: Apply middleware vào để xử lý. Express từ 4.16 trở đi đã tích hợp sẵn middleware (nhưng chưa
//được use).
app.use(
    express.urlencoded({
        extended: true,
    }),
) // Middleware để xử lý dữ liệu từ form submit (HTML) lên chúng ta.
app.use(express.json()) // Middleware để xử lý dữ liệu được gửi từ JavaScript, XMLHttpRequest, fetch, axios,...

//HTTP logger
app.use(morgan('combined'))

// using Middleware method-overrate để chuyển method form submit từ POST
// sang method ta cần (vd: PUT, PATCH)
app.use(methodOverride('_method'))

//Template engine
app.engine(
    'hbs',
    hbs.engine({
        extname: '.hbs',
        helpers: {
            sum(a, b) {
                return a + b
            },
        },
    }),
)
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
    console.log(`App listening on port ${port}`)
})
