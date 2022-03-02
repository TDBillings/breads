const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')


// Middleware
app.use(methodOverride('_method'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

// Routes
app.get('/', (req, res) => {
    res.redirect('/breads')
})

// Breads
const breadsController = require('./controllers/breads_controller')
app.use('/breads', breadsController)

// Bakers
const bakersController = require('./controllers/bakers_controller')
app.use('/bakers', bakersController)

// 404 Page
app.get('*', (req, res) => {
    res.render('Error404')
  })

// database
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('db connected'))
  .catch(e => console.log(e))

app.listen(PORT, () => {
    console.log("nomming at port", PORT)
})