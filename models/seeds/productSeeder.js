const mongoose = require('mongoose')
const Product = require('../product')
mongoose.connect('mongodb://localhost/pos', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  Product.create(
    { name: '焦糖烏龍戚風', category: 'cake', amount: 150 },
    { name: '紅豆抹茶捲', category: 'cake', amount: 140 },
    { name: '綜合水果戚風', category: 'cake', amount: 160 },
    { name: '紅茶香蕉巧克力戚風', category: 'cake', amount: 150 },
    { name: '蜜瓜焙茶戚風', category: 'cake', amount: 140 },
    { name: '鐵觀音巴斯克', category: 'cake', amount: 180 },
    { name: '百香檸檬糖霜蛋糕', category: 'cake', amount: 120 },
    { name: '芝麻鳳梨四季春戚風', category: 'cake', amount: 140 },
    { name: '紅茶', category: 'drink', amount: 110 },
    { name: '綠茶', category: 'drink', amount: 110 },
    { name: '柚香氣泡飲', category: 'drink', amount: 130 },
    { name: '莓果氣泡飲', category: 'drink', amount: 130 },
    { name: '手沖咖啡', category: 'drink', amount: 170 },
    { name: '鳳梨冰茶', category: 'drink', amount: 120 }
  )
    .then(() => {
      console.log('cakeSeeder done!')
      db.close()
    })
})
