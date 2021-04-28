const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const Cake = require('./models/cake')
const Drink = require('./models/drink')
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
  const cake = Cake.aggregate([
    {
      $project: {
        name: 1,
        amount: 1,
        id: 1
      }
    }
  ])

  const drink = Drink.aggregate([
    {
      $project: {
        name: 1,
        amount: 1,
        id: 1
      }
    }
  ])

  Promise.all(([cake, drink]))
    .then(([cakeItem, drinkItem]) => {
      res.render('index', { cakeItem, drinkItem })
    })
    .catch(error => console.log(error))

})

app.post('/shoppingList', async (req, res) => {
  const cake = Cake.aggregate([
    {
      $project: {
        name: 1,
        amount: 1,
        id: 1
      }
    }
  ])

  const drink = Drink.aggregate([
    {
      $project: {
        name: 1,
        amount: 1,
        id: 1
      }
    }
  ])
  const orderCake = await Cake.findOne({ name: req.body.cake })
  Promise.all(([cake, drink, orderCake]))
    .then(([cakeItem, drinkItem, orderCake]) => {
      res.render('index', { cakeItem: cakeItem, drinkItem: drinkItem, orderCakeName: orderCake.name, orderAmount: orderCake.amount })
    })
    .catch(error => console.log(error))

})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})