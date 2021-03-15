const express = require('express')
const router = express.Router()
const pagesController = require('../controllers/PagesController')
const projectsController = require('../controllers/ProjectsController')
const blogController = require('../controllers/BlogController')


router.get('/', pagesController.homePage)

router.get('/about', pagesController.aboutPage)

router.get('/contact', pagesController.contact)

router.get('/blog', blogController.index)
router.get('/blog/create', blogController.create)
router.get('/blog', blogController.index)
router.get('/blog', blogController.index)


/**
 * PROJECTS
 * 
 * 
 * 
 */
router.get('/projects', projectsController.index)
router.get('/projects/create', projectsController.create)
router.post('/projects', projectsController.store)
router.get('/projects/:title', projectsController.show)
router.get('/projects/:title/edit', projectsController.edit)
router.put('/projects/:title', projectsController.update)
router.delete('/projects/:title', projectsController.destroy)

 /**
 * BLOG
 * 
 * 
 * 
 */


 /**
 * PAGES
 * 
 * 
 * 
 */




module.exports = router