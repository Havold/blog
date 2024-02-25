const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')

class MeController {
    // [GET] me/stored/courses
    storedCourses(req, res, next) {
        Course.find({}).then((courses) =>
            res.render('me/stored-courses', {
                courses: multipleMongooseToObject(courses),
            }),
        )
    }

    // [GET] me/stored/news
    storedNews(req, res, next) {
        res.send('MY NEWS!!!')
    }
}

module.exports = new MeController()
