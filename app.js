const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const Product = require('./models/product')
const mongoose = require('mongoose')
const db = mongoose.connection

mongoose.connect('mongodb://localhost/pos', { useNewUrlParser: true, useUnifiedTopology: true })

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  console.log('mongodb connected')
})

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  const cake = Product.aggregate([
    { $match : {category: "cake"}},
    { $project: {
        name: 1,
        amount: 1
      }
    }
  ])

  const drink = Product.aggregate([
    { $match : {category: "drink"}},
    { $project: {
        name: 1, 
        amount: 1
      }
    }
  ])

  Promise.all(([cake, drink]))
    .then(([cakeItem, drinkItem]) => {
      res.render('index', { cakeItem, drinkItem })
    })
    .catch(error => console.log(error))

})

app.get('/new', (req, res) => {
  res.render('new')
})

app.post('/new', (req, res) => {
  return Product.create({
    name: req.body.name,
    category: req.body.category,
    amount: req.body.price
  })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})