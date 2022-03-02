const express = require('express')
const router = express.Router()
const Bread = require('../models/bread')
const Baker = require('../models/baker')

router.get('/', (req, res) => {
    Baker.find()
        .then(foundBakers => {
            Bread.find()
                .then(foundBreads => {
                    res.render('index', {
                        breads: foundBreads,
                        title: 'Index Page',
                        bakers: foundBakers
                 })
            })
        })
})

// New
router.get('/new', (req, res) => {
    Baker.find()
        .then(foundBakers => {
            res.render('new', {
                bakers: foundBakers
            })
        })
})

// Create
router.post('/', (req, res) => {
    if (!req.body.image) {
        req.body.image = undefined
    }
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread.create(req.body)
        .then(_ => res.redirect('/breads'))
        .catch(e => res.render('error404'))
})

// EDIT
router.get('/:id/edit', (req, res) => {
    Baker.find()
        .then(foundBakers => {
            Bread.findById(req.params.id)
                .then(foundBread => {
                    res.render('edit', {
                        bread: foundBread,
                        bakers: foundBakers
                    })
                })
        })
})

// Show
router.get('/:id', (req, res) => {
    Bread.findById(req.params.id)
        .populate('baker')
        .then(foundBread => {
            res.render('show', {
                bread: foundBread
            })
        })
})

// DELETE
router.delete('/:id', (req, res) => {
    Bread.findByIdAndDelete(req.params.id)
        .then(deletedBread => res.status(303).redirect('/breads'))
})

// UPDATE
router.put('/:id', (req, res) => {
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedBread => res.redirect(`/breads/${req.params.id}`))
})

module.exports = router