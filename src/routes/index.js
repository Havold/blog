const newsRoute = require('./news')

function route(app) {
    app.get('/', (req, res) => {
        res.render('home');
      });

    app.use('/news', newsRoute);

    app.get('/search', (req, res) => {
        console.log(req.query.q)
        res.render('search');
    });
  
  app.post('/search', (req, res) => {
    console.log(req.body)
    res.send("Hello các bạn");
  });
}

module.exports = route;