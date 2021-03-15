const express = require('express')
const PostModel = require('../models/Post.js').model


var blogController = {}

blogController.index = (req, res) => {
    res.render('blog/index')
}

blogController.show = (req, res) => {
    res.render('blog/show')
}
blogController.create = (req, res) => {
    res.render('blog/create')
}
blogController.store= (req, res) => {

    PostModel.create({title: 'My First Post', description: 'hey this is a cool post about nothing'}, function(err, data) {
        console.log(data)
    })



    res.send(req.body)
}




module.exports = blogController