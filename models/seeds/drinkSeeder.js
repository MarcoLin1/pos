const mongoose = require('mongoose')
const Drink = require('../drink')
mongoose.connect('mongodb://localhost/pos', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  Drink.create(
    { name: '紅茶', amount: 110 },
    { name: '綠茶', amount: 110 },
    { name: '柚香氣泡飲', amount: 130 },
    { name: '莓果氣泡飲', amount: 130 },
    { name: '手沖咖啡', amount: 170 },
    { name: '鳳梨冰茶', amount: 120 }
  )
    .then(() => {
      console.log('drinkSeeder done!')
      db.close()
    })
})