const express = require('express')
const router = express.Router()
const pagesController = require('../controllers/PagesController')
const projectsController = require('../controllers/ProjectsController')
const blogController = require('../controllers/BlogController')


router.get('/', pagesController.homePage)

router.get('/about', pagesController.aboutPage)

router.get('/projects', projectsController.index)

router.get('/blog', blogController.index)


module.exports = router