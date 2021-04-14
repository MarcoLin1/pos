const mongoose = require('mongoose')
const Cake = require('../cake')
mongoose.connect('mongodb://localhost/pos', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  Cake.create(
    { name: '焦糖烏龍戚風', amount: 150, id: 001 },
    { name: '紅豆抹茶捲', amount: 140, id: 002 },
    { name: '綜合水果戚風', amount: 160, id: 003 },
    { name: '紅茶香蕉巧克力戚風', amount: 150, id: 004 },
    { name: '蜜瓜焙茶戚風', amount: 140, id: 005 },
    { name: '鐵觀音巴斯克', amount: 180, id: 006 },
    { name: '百香檸檬糖霜蛋糕', amount: 120, id: 007 },
    { name: '芝麻鳳梨四季春戚風', amount: 140 }
  )
    .then(() => {
      console.log('cakeSeeder done!')
      db.close()
    })
})
