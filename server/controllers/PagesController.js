const express = require('express')
var pagesController = {};

pagesController.homePage = (req,res) => {
    res.render('pages/home')
}

pagesController.aboutPage = (req,res) => {
    res.send({"page": "About"})
}


module.exports = pagesController