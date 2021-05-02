const express = require('express')
const router = express.Router()
const Product = require('../../models/product')

router.get('/', (req, res) => {
    const cake = Product.aggregate([
    { $match : {category: "Cake"}},
    { $project: {
        name: 1,
        amount: 1,
        category: 1,
        url: 1
      }
    }
  ])

  const drink = Product.aggregate([
    { $match : {category: "Drink"}},
    { $project: {
        name: 1, 
        amount: 1,
        category: 1,
        url: 1
      }
    }
  ])

  Promise.all(([cake, drink]))
    .then(([cakeItem, drinkItem]) => {
      res.render('index', { cakeItem, drinkItem })
    })
    .catch(error => console.log(error))

})


module.exports = router