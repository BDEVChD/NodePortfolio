const express = require('express')
const router = express.Router()
const pagesController = require('../controllers/PagesController')
const projectsController = require('../controllers/ProjectsController')
const blogController = require('../controllers/BlogController')


router.get('/', pagesController.homePage)

router.get('/about', pagesController.aboutPage)

router.get('/contact', pagesController.contact)

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
router.get('/projects/:id', projectsController.show)
router.get('/projects/:id/edit', projectsController.edit)
router.put('/projects/:id', projectsController.update)
router.delete('/projects/:id', projectsController.destroy)

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