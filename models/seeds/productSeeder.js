const mongoose = require('mongoose')
const Product = require('../product')
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/pos'
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  Product.create(
    { name: '焦糖烏龍戚風', category: 'Cake', amount: 150, url: 'https://leuj0217.com/wp-content/uploads/2019/10/IMG_4731-1-1024x683.jpeg' },
    { name: '紅豆抹茶捲', category: 'Cake', amount: 140, url:'https://leuj0217.com/wp-content/uploads/2019/10/IMG_4731-1-1024x683.jpeg' },
    { name: '綜合水果戚風', category: 'Cake', amount: 160, url: 'https://leuj0217.com/wp-content/uploads/2019/10/IMG_4731-1-1024x683.jpeg'  },
    { name: '紅茶香蕉巧克力戚風', category: 'Cake', amount: 150,url:'https://leuj0217.com/wp-content/uploads/2019/10/IMG_4731-1-1024x683.jpeg' },
    { name: '蜜瓜焙茶戚風', category: 'Cake', amount: 140,url:'https://leuj0217.com/wp-content/uploads/2019/10/IMG_4731-1-1024x683.jpeg' },
    { name: '鐵觀音巴斯克', category: 'Cake', amount: 180,url:'https://leuj0217.com/wp-content/uploads/2019/10/IMG_4731-1-1024x683.jpeg' },
    { name: '百香檸檬糖霜蛋糕', category: 'Cake', amount: 120,url:'https://leuj0217.com/wp-content/uploads/2019/10/IMG_4731-1-1024x683.jpeg' },
    { name: '芝麻鳳梨四季春戚風', category: 'Cake', amount: 140,url:'https://leuj0217.com/wp-content/uploads/2019/10/IMG_4731-1-1024x683.jpeg' },
    { name: '紅茶', category: 'Drink', amount: 110,url:'https://i.epochtimes.com/assets/uploads/2019/08/black-tea_226225390-600x400.jpg' },
    { name: '綠茶', category: 'Drink', amount: 110,url:'https://i.epochtimes.com/assets/uploads/2021/03/green-tea_409124473-600x400.jpg' },
    { name: '柚香氣泡飲', category: 'Drink', amount: 130,url:'https://i1.wp.com/kingsmenroutine.com/wp-content/uploads/2019/04/routine-e88a92e69e9ce6b0a3e6b3a1-1.jpg?resize=2048%2C1365&ssl=1' },
    { name: '莓果氣泡飲', category: 'Drink', amount: 130,url:'https://i1.wp.com/kingsmenroutine.com/wp-content/uploads/2019/04/routine-e88a92e69e9ce6b0a3e6b3a1-1.jpg?resize=2048%2C1365&ssl=1' },
    { name: '手沖咖啡', category: 'Drink', amount: 170,url:'https://i1.wp.com/kingsmenroutine.com/wp-content/uploads/2019/04/routine-e88a92e69e9ce6b0a3e6b3a1-1.jpg?resize=2048%2C1365&ssl=1' },
    { name: '鳳梨冰茶', category: 'Drink', amount: 120,url:'https://i1.wp.com/kingsmenroutine.com/wp-content/uploads/2019/04/routine-e88a92e69e9ce6b0a3e6b3a1-1.jpg?resize=2048%2C1365&ssl=1' }
  )
    .then(() => {
      console.log('cakeSeeder done!')
      db.close()
    })
})
