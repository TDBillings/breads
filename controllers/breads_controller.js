const express = require('express')
const router = express.Router()
const Bread = require('../models/bread')

router.get('/', (req, res) => {
    res.render('Index',
        {
            breads: Bread,
            title: 'Index Page'
        }
    )
})

// Show
router.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
})

module.exports = router