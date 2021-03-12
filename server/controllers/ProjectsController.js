const express = require('express')
const { index } = require('./BlogController')
var ProjectsController = {}



ProjectsController.index = (req, res) => {
    res.render('projects/index')
}


ProjectsController.create = (req, res) => {
    res.render('projects/index')
}


ProjectsController.store = (req, res) => {
    res.render('projects/index')
}


ProjectsController.show = (req, res) => {
    res.render('projects/index')
}


ProjectsController.edit= (req, res) => {
    res.render('projects/index')
}


ProjectsController.update = (req, res) => {
    res.render('projects/index')
}


ProjectsController.destroy = (req, res) => {
    res.render('projects/index')
}

module.exports = ProjectsController