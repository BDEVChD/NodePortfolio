const express = require('express')
var ProjectsController = {}



ProjectsController.index = (req, res) => {
    res.send('<h1>Gallery Page Wlcome</h1><div><img src="/img/pupps.jpg" /></div>')
}

module.exports = ProjectsController