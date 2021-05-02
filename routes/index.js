const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const products = require('./modules/products')

router.use('/', home)
router.use('/products', products)

module.exports = router