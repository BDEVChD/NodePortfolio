const express = require('express')
const { index } = require('./BlogController')
var ProjectsController = {}



ProjectsController.index = (req, res) => {
    res.render('projects/index')
}


ProjectsController.create = (req, res) => {
    res.render('projects/create')
}


ProjectsController.store = (req, res) => {
    res.send({
        saved: true
    })
}


ProjectsController.show = (req, res) => {
    res.render('projects/show')
}


ProjectsController.edit= (req, res) => {
    res.render('projects/edit')
}


ProjectsController.update = (req, res) => {
    res.send({
        updated: true
    })
}


ProjectsController.destroy = (req, res) => {
    res.send({
        deleted: true
    })
}

module.exports = ProjectsController