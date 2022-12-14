const express = require('express')
const router = express.Router()

router.route('/').get((req, res) => {
    res.status(200).send('This is my home page')
})

router.route('/about').get((req, res) => {
    res.status(200).send('This is my about page')
})

router.route('/projects').get((req, res) => {
    res.status(200).send('Here will be listed all of my projects')
})

module.exports = router
