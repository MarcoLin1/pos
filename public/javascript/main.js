const productCheckbox = document.querySelectorAll('.productCheckbox')
const posContainer = document.querySelector('.posContainer')
const tableNum = document.querySelectorAll('.tableNum')
const quantity = document.querySelectorAll('.quantity')
const showList = document.querySelector('#showList')
const totalAmount = document.querySelector('.totalAmount')
let price = 0
let table = 0
let number = 0
let itemPrice = 0
let total = 0
let name = ''
let orderHTML = ''

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
      if (event.target.matches('.add_btn')) {
        orderHTML =
          `
          <tr class="cartItem" style="text-align: center;">
            <td class="checkName">${name}</td>
            <td class="checkTotal">${number}</td>
            <td class="checkAmount" data-price>${price * number}</td>
            <td class="checkTable">${table}</td>
            <td class="checkDelete"><i class="fas fa-trash-alt"></i></td>
          </tr>
          `
        showList.insertAdjacentHTML('beforeend', orderHTML)
        itemPrice = price * number 
        total += itemPrice
        totalAmount.innerText = `${total}`
      }
    }
  })
  if (event.target.matches('.fa-trash-alt')) {
    event.target.parentElement.parentElement.remove()
    total -= event.target.parentElement.previousElementSibling.previousElementSibling.innerText
    totalAmount.innerText = `${total}`
  }

  if (event.target.matches('#checkout')) {
    alert (`total amount: ${total}`)
    clearOrder(showList)
    total = 0
    totalAmount.innerText = `${total}`
  }
})

function clearOrder(target) {
  target.querySelectorAll('.cartItem').forEach(item => item.remove())
}

