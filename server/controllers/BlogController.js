const express = require('express')
var BlogController = {}

BlogController.index = (req, res) => {
    res.send('<h1>Frumius</div>')
}

module.exports = BlogController