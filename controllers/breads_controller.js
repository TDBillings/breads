const express = require('express')
const router = express.Router()
const Bread = require('../models/bread')

router.get('/', (req, res) => {
    Bread.find()
    .then(foundBreads => {
        res.render('index', {
            breads: foundBreads,
            title: 'Index Page'
        })
    })
})

// New
router.get('/new', (req, res) => {
    res.render('new')
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
    res.redirect('/breads')
})

// EDIT
router.get('/:id/edit', (req, res) => {
    Bread.findById(req.params.id)
        .then(foundBread => {
            res.render('edit', {
                bread: foundBread
            })
        })
})

// Show
router.get('/:id', (req, res) => {
    Bread.findById(req.params.id)
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