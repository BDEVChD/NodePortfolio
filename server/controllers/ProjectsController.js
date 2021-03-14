const express = require('express')
const { index } = require('./BlogController')
var ProjectsController = {}



ProjectsController.index = (req, res) => {
    const projects = [{
        title: 'dashboard',
        tags: ['html', 'css', 'javascript', 'php'], 
        date: '12/3/2017',
        img: 'img/farm.png'
    },
    {
        title: 'Home Slice',
        tags: ['html', 'css', 'javascript', 'node'], 
        date: '12/3/2017',
        img: 'img/kaveth.png'
    },
    {
        title: 'Verify Phone',
        tags: ['html', 'css', 'javascript', 'php'], 
        date: '12/3/2017',
        img: 'img/dstld.png'
    }, 
    {
        title: 'Call to Client',
        tags: ['html', 'css', 'javascript', 'php'], 
        date: '12/3/2017',
        img: 'img/farm.png'
    },
    {
        title: 'Moving Industries',
        tags: ['html', 'css', 'javascript', 'php'], 
        date: '12/3/2017',
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg'
    }
]

    res.render('projects/index', {
        projects: projects
    })
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