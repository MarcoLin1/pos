const revenueContainer = document.querySelector('.revenueContainer')
const revenueShowList = document.querySelector('#revenueShowList')
let receiveData = []
let revenueHTML = ''
let objectLength = 0


revenueContainer.addEventListener('click', (event) => {
  receiveData = JSON.parse(localStorage.getItem('shoppingList'))
  objectLength = Object.keys(receiveData).length

  if (event.target.matches('.refresh')) {
    for(let i = 0; i < objectLength; i++) {
      revenueHTML = 
      `
      <tr class="revenueCartItem" style="text-align: center;">
        <td class="revenueCheckName" style="padding: 0.5rem; box-shadow:0px 0px 9px 0px rgb(0 0 0 / 10%);">${receiveData[i].productName}</td>
        <td class="revenueCheckTotal" style="padding: 0.5rem; box-shadow:0px 0px 9px 0px rgb(0 0 0 / 10%);">${receiveData[i].quantity}</td>
        <td class="revenueCheckAmount" style="padding: 0.5rem; box-shadow:0px 0px 9px 0px rgb(0 0 0 / 10%);">${receiveData[i].total}</td>
        <td class="revenueCheckTable" style="padding: 0.5rem; box-shadow:0px 0px 9px 0px rgb(0 0 0 / 10%);">${receiveData[i].order}</td>
      </tr>
      `
      revenueShowList.insertAdjacentHTML('beforeend', revenueHTML)
    }
  }
})

