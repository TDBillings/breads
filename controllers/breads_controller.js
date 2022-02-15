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
    if (Bread[req.params.arrayIndex]) {
        res.render('Show', {
            bread: (Bread[req.params.arrayIndex])
        })
    } else {
        res.send('404')
    }
    
})

module.exports = router