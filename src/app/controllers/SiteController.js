const { json } = require('express')
const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')
class SiteController {
    // [GET] /
    search(req, res) {
        res.render('search')
    }

    // [GET] /search
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                // courses = courses.map((course) => course.toObject())
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                })
            })
            .catch(next)

        // res.render('home')
    }
}

module.exports = new SiteController()
