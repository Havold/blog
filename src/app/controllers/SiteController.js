class SiteController {
    // [GET] /
    search(req, res) {
        res.render('search');
    }

    // [GET] /search
    index(req, res) {
        res.render('home');
    }
}

module.exports = new SiteController();
