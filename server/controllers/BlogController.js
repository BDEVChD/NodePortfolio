const express = require('express')
var BlogController = {}

BlogController.index = (req, res) => {
    res.render('blog/index')
}

module.exports = BlogController