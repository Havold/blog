const { json } = require('express')
const Course = require('../models/Course')

class SiteController {
    // [GET] /
    search(req, res) {
        res.render('search')
    }

    // [GET] /search
    index(req, res) {
        Course.find({})
            .then((course) => {
                res.json(course)
            })
            .catch((err) => {
                console.log(err)
            })

        // res.render('home')
    }
}

module.exports = new SiteController()
