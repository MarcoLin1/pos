const productCheckbox = document.querySelectorAll('.productCheckbox')
const posContainer = document.querySelector('.posContainer')
const tableNum = document.querySelectorAll('.tableNum')
const quantity = document.querySelectorAll('.quantity')
const showList = document.querySelector('#showList')
const totalAmount = document.querySelector('.totalAmount')
const trashIcon = document.querySelectorAll('.fa-trash-alt')
const showOrderList = document.querySelector('#showOrderList')

let price = 0
let table = 0
let number = 0
let itemPrice = 0
let total = 0
let name = ''
let orderHTML = ''
let saveLocalStorage = []
let saveTempData = []
let getLocalStorage = JSON.parse(localStorage.getItem('shoppingList'))
let orderNum = 1
let id = 1


posContainer.addEventListener('click', (event) => {
  productCheckbox.forEach(product => {
  if (product.checked) {
      price = product.value
      name = product.parentElement.innerText
      tableNum.forEach(item => {
        if (item.checked) {
          table = item.value
        } 
      })
      quantity.forEach(num => {
        if (num.checked) {
          number = num.value
        }
      })

      // add product to shoppingList
      if (event.target.matches('.add_btn')) {
        orderHTML =
          `
          <tr class="cartItem" style="text-align: center;">
            <td class="checkName">${name}</td>
            <td class="checkTotal">${number}</td>
            <td class="checkAmount" data-price>${price * number}</td>
            <td class="checkTable">${table}</td>
            <td class="checkDelete"><i class="fas fa-trash-alt checkDelete" data-id="${id}"></i></td>
          </tr>
          `
        
        showList.insertAdjacentHTML('beforeend', orderHTML)
        itemPrice = price * number 
        total += itemPrice
        totalAmount.innerText = `${total}`

        saveTempData.push({
          order: orderNum,
          id: id,
          productName: name,
          quantity: number,
          total: itemPrice
        })
        id =  id + 1
      }
    }
  })

  // delete item in shoppingList
  if (event.target.matches('.checkDelete')) {
    let deleteIndex = saveTempData.findIndex(item => item.id === Number(event.target.dataset.id))
    saveTempData.splice(deleteIndex, 1)

    event.target.parentElement.parentElement.remove()
    total -= event.target.parentElement.previousElementSibling.previousElementSibling.innerText
    totalAmount.innerText = `${total}`
  }

  // checkout function
  if (event.target.matches('#checkout')) {
    alert (`total amount: ${total}`)
    clearOrder(showList)
    total = 0
    totalAmount.innerText = `${total}`

    // take data from localStorage and save it again
    if (getLocalStorage === null) {
      saveLocalStorage = [...saveTempData]
    } else {
      saveLocalStorage = getLocalStorage.concat(saveTempData)
    }
    localStorage.setItem('shoppingList', JSON.stringify(saveLocalStorage))
    orderNum++
    saveLocalStorage = []
    
    // add item to orderList
    orderHTML =
    `
    <tr class="cartItem orderListCartItem" style="text-align: center;">
      <td class="checkbox orderListCheckbox">
        <input type="checkbox" name="checkbox" id="orderCheckbox" class="orderCheckbox">
      </td>
      <td class="order orderCheckName">${name}</td>
      <td class="order orderCheckTotal">${number}</td>
      <td class="order orderCheckAmount" data-price>${price * number}</td>
      <td class="order orderCheckTable">${table}</td>
      <td class="orderCheckDelete"><i class="fas fa-trash-alt orderDelete" data-id="${id}"></i></td>
    </tr>
    `
    showOrderList.insertAdjacentHTML('beforeend', orderHTML)
  }

  // delete item in orderList
  if (event.target.matches('.orderDelete')) {
    event.target.parentElement.parentElement.remove()
  }

  // add style when checkbox checked 
  if(event.target.checked) {
    showOrderList.classList.add('checkboxStyle')
  } else {
    showOrderList.classList.remove('checkboxStyle')
  }
})


function clearOrder(target) {
  target.querySelectorAll('.cartItem').forEach(item => item.remove())
}

