const express = require('express')
const router = express.Router()
const Product = require('../../models/product')

router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/new', (req, res) => {
  return Product.create({
    name: req.body.name,
    category: req.body.category,
    amount: req.body.amount,
    url : req.body.url
  })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

router.post('/:id/delete', (req, res) => {
  return Product.findById(req.params.id)
    .then(item => item.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

router.get('/:id/edit', (req, res) => {
  Product.findById(req.params.id)
    .lean()
    .then(product => res.render('edit', {product: product}))
    .catch(error => console.log(error))
})

router.post('/:id/edit', (req, res) => {
  const id = req.params.id
  let {name, category, amount, url} = req.body
  return Product.findById(id)
    .then(product => {
      product.name = name,
      product.category = category,
      product.amount = amount,
      product.url = url
      return product.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

router.get('/revenue', (req, res) => {
  res.render('revenue')
})

module.exports = router