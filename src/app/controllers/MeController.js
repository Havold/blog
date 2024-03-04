const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')

class MeController {
    // [GET] me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([Course.find({}),Course.countDocumentsWithDeleted({deleted: true})])
            .then(([courses,deletedCount]) => {
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: multipleMongooseToObject(courses),
                })
            })
            .catch(next)
    }

    // [GET] me/trash/courses
    trashCourses(req, res, next) {
        Course.findWithDeleted({ deleted: true })
            .then((courses) =>
                res.render('me/trash-courses', {
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next)
    }

    // [GET] me/stored/news
    storedNews(req, res, next) {
        res.send('MY NEWS!!!')
    }
}

module.exports = new MeController()
