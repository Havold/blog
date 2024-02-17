const newsRoute = require('./news')
const siteRoute = require('./site')

function route(app) {
    app.use('/news', newsRoute)
    app.use('/', siteRoute)

    //   app.post('/search', (req, res) => {
    //     console.log(req.body)
    //     res.send("Hello các bạn");
    //   });
}

module.exports = route
