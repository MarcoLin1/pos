const plusBtn = document.querySelector('.plusBtn')
const show = document.querySelector('#showList')
const Cake = require('../../models/cake')
const Drink = require('../../models/drink')

let cartItems = []

function showList(event) {
  const id = event.target.dataset.id
  // let addCart = productData.find(item => item.id === id)
  // let name = addCart.name
  // let price = addCart.price

  const addCake = Cake.find()
    .lean()
    .then(item => item.id === id)
    .catch(error => console.log(error))

  const addDrink = Drink.find()
    .lean()
    .then(item => item.id === id)
    .catch(error => console.log(error))

  let cakeName = addCake.name
  let cakeAmount = addCake.amount
  let drinkName = addDrink.name
  let drinkAmount = addDrink.amount


  let targetItem = cartItems.find((item) => item.id === id)

  if (targetItem) {
    targetItem.quantity += 1
  } else {
    cartItems.push({
      id: id,
      name: name,
      amount: price,
      quantity: 1
    })
  }
  console.log(cartItems)
  show.innerHTML = cartItems.map(item =>
    `
      <tbody id="showList">
        <tr style="text-align: center;">
          <td><input type="checkbox" name="item" id="item" style="width: 20px; height:20px;"></td>
          <td class="checkName">${item.name}</td>
          <td class="checkNumbers">
            <i class="fa fa-plus-circle up fa-lg" data-id="${item.id}"></i>
            <i class="fa fa-minus-circle down fa-lg" data-id="${item.id}"></i>
          </td>
          <td class="checkTotal">${item.quantity}</td>
          <td class="checkAmount">${item.amount}</td>
          <td class="checkTable">2</td>
        </tr>
      </tbody>
  `
  )
}

const menu = document.querySelector('#menu')
menu.addEventListener('click', showList)

// plusBtn.addEventListener('click', function (event) {
//   console.log(plusBtn)
//   show.innerHTML +=
//     `      
//       <tbody id="showList">
//         <tr style="text-align: center;">
//           <td><input type="checkbox" name="item" id="item" style="width: 20px; height:20px;"></td>
//           <td class="checkName">芝麻葡萄鐵觀音戚風</td>
//           <td class="checkNumbers">
//             <i class="fa fa-plus-circle up fa-lg"></i>
//             <i class="fa fa-minus-circle down fa-lg"></i>
//           </td>
//           <td class="checkTotal">1</td>
//           <td class="checkAmount">$190</td>
//           <td class="checkTable">2</td>
//         </tr>
//       </tbody>
//     `
// })